import React, { useEffect, useRef, useState } from 'react'

function Ref2() {
  const commonRef=useRef("");
  const [input1,setInput1]=useState();
  const [inputValue, setInputValue] = useState("10");
  const count = useRef(1);
  useEffect(() => {
    count.current +=1;
  },[inputValue]);
  useEffect(()=>{
    commonRef.a=input1;
  },[input1])
  return(
    <>
      <input type="text" onChange={(e)=>{setInput1(e.target.value)}}/>  

      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <h1>Render Count: {count.current}</h1>
      <h1>Current:{input1}</h1>  
      <h1>Previous:{commonRef.a}</h1>  
    </>
  )
}



export default Ref2
