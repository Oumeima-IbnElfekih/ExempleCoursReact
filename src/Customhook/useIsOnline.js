import { useState,useEffect } from "react";



export default function useIsOnline() {
    const [online,setOnLine]=useState(navigator.onLine);

    const offlineHandler = () => {
      setOnLine(false);
}

  const onlineHandler = () => {
      setOnLine(true);
  }
    useEffect(() => {
      
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);
      return () => {
        window.removeEventListener("online",onlineHandler);
        window.removeEventListener("offline", offlineHandler);
      }
    }, [])
    return online;
}
