import Sidebar from "./Sidebar"
import VideoContainer from "./VideoContainer"
import Watch from "./Watch"
import {Outlet} from 'react-router-dom'
const Body = ()=>{
    return (
        <div>
            <div className="flex">
                <Sidebar/>
               <Outlet/>
                {/* <VideoContainer/>
                <Watch /> */}
            </div>
        </div>
    )
}

export default Body