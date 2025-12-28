import { useState } from 'react';
import './App.css'

function App() {
  const [displayExcuse,setExcuse] = useState("");

  function generateExcuse(excuse){
    const url = "https://excuser-three.vercel.app/v1/excuse/"+excuse;
    
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.excuse)
      setExcuse(data[0].excuse);
    })
  }

  return (
    <>
      <h2>Click on the category to generate excuse</h2>
      <main>
        <button onClick={() => generateExcuse("family")}>Family</button>
        <button onClick={() => generateExcuse("office")}>Office</button>
        <button onClick={() => generateExcuse("college")}>College</button>
        <button onClick={() => generateExcuse("party")}>Party</button>
        <button onClick={() => generateExcuse("funny")}>Funny</button>
        <button onClick={() => generateExcuse("")}>Random</button>
      </main>
      <p>{displayExcuse}</p>
    </>
  )
}

export default App
