import { useEffect } from "react";
import axios from "axios";

export default function TestCookices () {
    useEffect(() => {
        fetchDataCookie()
    },[])
    
  const fetchDataCookie = async ()=>{
    try{
      const cookiesresponse = await axios.get('https://settlers-hub-server.vercel.app/test-cookie', { withCredentials: true })
  
    console.log('Response cookies:', cookiesresponse);
  } catch(error ) {
    console.log('Error:', error.message);
  }  
  return (
    <div>Hi cookes</div>
  )
}
}