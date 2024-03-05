import result from 'autoprefixer/data/prefixes';
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { SEARCH_RESULT_URL } from './utils/Constant';

const SearchResult = ()=>{
    const location = useLocation()
    const text = location.state.text
    // console.log("text ",text)

    const [resultData,setresultData] = useState([])

    useEffect(()=>{
        fetchdata()
    },[text])

    async function fetchdata(){
        const data = await  fetch(SEARCH_RESULT_URL+text)
        const json = await data.json()
        setresultData(json.items)
        console.log("result data ",json.items)
    }

    // if(resultData.length==0) return
    return <div>
    {resultData.map((e)=>{
     
        return(
            <div className='flex m-5 p-2 hover:bg-slate-100'>
                <div>
                    <img className='w-96 h-72 rounded-2xl'  alt='thumbnail' src={e.snippet.thumbnails.high.url} />
                </div>
                <div className='tex'>
                    <h1 className='font-bold text-xl m-3 p-2'>{e.snippet.title}</h1>
                    <h2 className='m-3 p-2 text-xl'> channel name = {e?.snippet?.channelTitle}</h2>
                    <p className='m-3 p-2'>{e.snippet.description}</p>
                </div>
            </div>
        )
    })}
    </div>
} 

export default SearchResult;