


const handleSideBar = (isMobile) => {

    let sidebar = document.querySelector('#sidebar');
    
    if(isMobile){
        sidebar.classList.toggle('sm-close');
        sidebar.classList.remove('lg-close');
    }
    else{
        sidebar.classList.toggle('lg-close');
        sidebar.classList.remove('sm-close');
    }
}


export default handleSideBar;