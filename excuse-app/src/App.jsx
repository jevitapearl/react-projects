import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [displayExcuse,setDisplayExcuse] = useState("");
  const [excuseNumber, setExcuseNumber] = useState(0);
  const [excuseURL, setExcuseURL] = useState("");

  useEffect(() => {
    fetch(excuseURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setDisplayExcuse(data[0].excuse);
    })
    .catch((error) => console.log(error))
  }, 
  [excuseNumber]);

  function generateExcuse(excuse){
    setExcuseURL("https://excuser-three.vercel.app/v1/excuse/"+excuse);
    setExcuseNumber(excuseNumber+1);
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
