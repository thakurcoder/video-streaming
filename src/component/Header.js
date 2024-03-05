import {useDispatch} from 'react-redux';
import Search from './Search';
import { togglemenu } from './utils/AppSlice';

const Header = ()=>{
    const dispatch = useDispatch()
    const togglehandler = ()=>{
        dispatch(togglemenu());
    }

    return(
        <div className="grid grid-flow-col  justify-between shadow-2xl" >
            {/* menu and logo div */}
            <div className="flex">
                <img onClick={()=>togglehandler()} alt="menu" src="https://i.pinimg.com/originals/5b/63/5e/5b635ed97119e65461f41a8e3b3cf508.png" className="w-24 h-20 m-1 p-3 cursor-pointer " />

                <img alt="youtube logo" src="https://www.pikpng.com/pngl/b/40-405603_youtube-logo-button-png-transparent-background-youtube-logo.png" className="w-36 h-20 m-1 p-4"/>
            </div>

            {/* search div */}
            <Search/>

            {/* user icon div */}
            <div className="">
                <img alt="user icon" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" className="w-20 m-2 p-2" />
            </div>
        </div>
    )
}

export default Header;