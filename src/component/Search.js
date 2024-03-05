import { useEffect, useState } from "react";
import { SEARCH_AUTOCOMPLETE_URL } from "./utils/Constant";
import { useNavigate } from 'react-router-dom';
   

const Search = ()=>{

    const navigation = useNavigate();
  

    const [searchValue, setsearchValue] = useState("");
    const [suggestion, setsuggestion] = useState([]);
    const [flagForSearchList, setflagForSearchList] = useState(false);

    useEffect(()=>{
        const time = setTimeout(() => {
            
            autoCompleteHandler()
        }, 200);
    return()=>{
        clearTimeout(time)
    }
    },[searchValue]);

 

    const autoCompleteHandler = async()=>{
        const data = await fetch("https://corsproxy.org/?" + encodeURIComponent(SEARCH_AUTOCOMPLETE_URL + searchValue))
        const json = await data.json()
        // suggestion ist is in array 1
        setsuggestion(json[1])
        // console.log(json[1])
    }

    return(
        <div >
            <div className="">
                <input type="text" placeholder="Search" value={searchValue} onChange={(e)=>{
                    setsearchValue(e.target.value)
       
                }} onFocus={()=>setflagForSearchList(true)}
                // onBlur={()=>setflagForSearchList(false)}
                className="w-96 h-10  mt-6 rounded-l-3xl p-3 text-xl border border-slate-900" />
                <button 
                onClick={()=> navigation('/results',{state:{text:searchValue}})}
            
                className="  w-20 h-10 rounded-r-3xl text-xl font-bold border border-slate-900 bg-slate-300" >Search</button>
            </div>
            {/* div for suggestion */}
            { flagForSearchList &&
            (<div >
                <ul  className="absolute bg-slate-100 w-96 p-3 m-2 rounded-lg">
                    {
                        suggestion.map((e)=>{
                            return <div><li onClick={()=>{
                                setsearchValue(e)
                                setflagForSearchList(false)
                                console.log("hello")
                            }} className="p-1 m-1 hover:bg-slate-200 ">{"🔍 " +e}</li>
                            </div>
                        })
                    }
                    <li onClick={()=>setflagForSearchList(false)}>Clear suggestion</li>
                    
                    
                </ul>
            </div>)
            }
        </div>
    )
}

export default Search;