import { useState } from "react";
import './App.css';

export default function Switch() {
  const [toggle, setToggle] = useState(false);

  function handleSwitch(){
    setToggle(!toggle);
  }

  return (
    <div className={"switch "+(toggle?"green":"gray")} onClick={handleSwitch}>
      <div className={"toggle "+(toggle?"on":"off")} >
        <span >{toggle? "ON":"OFF"}</span>
      </div>
    </div>
  );
}