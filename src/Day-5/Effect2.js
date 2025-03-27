import axios from "axios";
import { useEffect } from "react";
function Effect2() {
       
    useEffect(()=>{
        const url=axios.get("kjdgsnksdfg");
        url
        .then((e)=>{
            console.log(e.data);
        })
        .catch((err)=>{
            console.error(err.name);
        })
        .finally(()=>{
            console.log("I am completed");
        })
    },[])
    function name2(){
        console.log(0)
    }
  return (
    <>
    <button onClick={name2}>+</button>
      <h1>Hello</h1>
    </>
  )
}

export default Effect2
