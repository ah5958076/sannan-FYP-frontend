
import { useSelector } from 'react-redux';
import handleSideBar from '../utils/manageSideBarHelper';
import useIsMobile from "../hooks/useIsMobile";
import { useNavigate } from 'react-router-dom';


const Nav = () => {
    const isMobile = useIsMobile();
    const navigate = useNavigate();
    //check whether to show nav or not
    const state = useSelector(state => state.bar);
    if(!state.status)  return null;

    const handleLogout = ()=>{
        navigate('/auth');
    }

    return(
        <div className=' bg-secondary-100 flex justify-between items-center py-3 px-6'>
            <button id='sidebar-controller-btn' onClick={()=>{handleSideBar(isMobile)}}><i className="fa-solid fa-bars-staggered"></i></button>
            <div className='flex gap-3 items-center'>
                <button className='bg-primary-700 text-white rounded-md text-xs px-3 py-2' onClick={handleLogout}>Log out</button>
                <figure>
                    <img src="/assets/images/logo/png/logo-no-background.png" alt="logo"  className='w-[3rem]'/>
                </figure>
            </div>
        </div>
    )
}

export default Nav
