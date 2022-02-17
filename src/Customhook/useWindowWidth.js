import { useState,useEffect } from 'react';


function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const handleResize =()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
      
    window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, [])
    return {width,height};
}

export default useWindowWidth;