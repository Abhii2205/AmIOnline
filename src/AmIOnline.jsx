import { useEffect, useState } from 'react'
import './AmIOnline.css'

function useIsOnline(){
  const [status, setStatus] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online',()=>{
      setStatus(true)
    })
    window.addEventListener('offline',()=>{
      setStatus(false)
    })
  },[])

  return status
}

function AmIOnline() {

  const status = useIsOnline()
  
  if(status){
    return(
      <img src='./online1.png' style={{ width: "300px" }}></img>
    )
  }
  else{
    return(
    <img src='./offline.png' style={{ width: "300px" }}></img>
    )
  }
}


export default AmIOnline
