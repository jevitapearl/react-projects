import {useState, useEffect} from 'react';
import './App.css'

function DateTime(){
  const [dateTime, setDateTime] = useState("");

  useEffect( () => {
      const interval = setInterval(()=>{
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();  
        setDateTime(`${formattedDate} - ${formattedTime}`)
      }, 1000);
      return () => clearInterval(interval);
    }
    , []
  )

  return(
    <h2>{dateTime}</h2>
  );
}

export default DateTime;