import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_URL } from "./utils/Constant"
import Videocard from "./Videocard"
import {Link} from 'react-router-dom'
import Watch from "./Watch"

const VideoContainer = ()=>{

    const [video , setvideo] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_URL)
        const json = await data.json()
        setvideo(json.items)
        console.log("video ",video)
     
    }

    
    if(!video) return
    return(
        <div className="flex flex-wrap justify-evenly">
            {video.map((e)=>{
                return <Link to={"/watch?v="+e.id}> <Videocard key={e.id} name={e}/> </Link>
            })}
       
        </div>
    )
}

export default VideoContainer