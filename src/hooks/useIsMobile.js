import React, { useEffect, useState } from 'react'


const useIsMobile = ()=>{
    const [isMobile,setIsMobile] = useState(window.innerWidth < 769);
    const handleResize = () => {
        if (window.innerWidth < 769) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    
    useEffect(() => {
      window.addEventListener("resize", handleResize);

      return ()=>{
        window.removeEventListener("resize", handleResize);
      }
    })

    return isMobile;

}


export default useIsMobile;