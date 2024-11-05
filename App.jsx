import React,{useState} from "react";

function App() {
const [a,b]=useState()
const[c,d]=useState("new text")
  function change(some){    
   let improve=some.target.value
    b(improve)
    console.log(some)
    console.log(improve)
  }

  function Clicking(){
d(a)
  }
  return (
    <div className="container">
      <h1>hello  {c} {a} </h1>
      <input  onChange={change}autoFocus type="text" placeholder="What's your name?" />
      <button onClick={Clicking}>Submit</button>
    </div>
  );
}

export default App;
