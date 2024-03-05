import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

const Sidebar = ()=>{

    const toggle = useSelector((state)=>state.App.ismenuopen)
    console.log("toggle ",toggle)

    if(!toggle) return 
   return(
        <div className="w-52 m-4 text-xl p-2 font-serif ">
            <ul>
                <Link to='/'><li className="m-1 p-1 hover:bg-slate-200">🏠 Home</li></Link>
                <li className="m-1 p-1 hover:bg-slate-200">📼 Shorts</li>
                <li className="m-1 p-1 hover:bg-slate-200">➖ Subscriptions </li>
            </ul>

            <div className="border divide-x-4 m-2"></div>

                <h1 className="m-1 p-1 font-bold">You</h1>
            <ul>
                <li className="m-1 p-1 hover:bg-slate-200">🎬 Your Channel</li>
                <li className="m-1 p-1 hover:bg-slate-200">⏱ History</li>
                <li className="m-1 p-1 hover:bg-slate-200">▶️ Your Video</li>
                <li className="m-1 p-1 hover:bg-slate-200">⏸ Watch Later</li>
            </ul>

            <div className="border divide-x-4 m-2"></div>

            <h1 className="m-1 p-1 font-bold">Explore</h1>
            
            <ul>
                <li className="m-1 p-1 hover:bg-slate-200">🚀 Trending</li>
                <li className="m-1 p-1 hover:bg-slate-200"> ♫  Music</li>
                <li className="m-1 p-1 hover:bg-slate-200">🎥 Movie</li>
                <li className="m-1 p-1 hover:bg-slate-200">🆕 News</li>
                <li className="m-1 p-1 hover:bg-slate-200">🏅 Sports</li>
            </ul>
        </div>
    )
   
}

export default Sidebar;