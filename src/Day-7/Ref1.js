import React, { useEffect, useRef } from 'react'

function Ref1() {
  let inputRef=useRef(null);
  function showFn(){
    inputRef.current.type='text';
  }
  function hideFn(){
    inputRef.current.type='password';
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <>
       <button onClick={showFn}>
        <i className='fa fa-eye'></i>
        </button>
       <button onClick={hideFn}>
        <i className='fa fa-eye-slash'></i>
       </button>
       <input type="text" value={"Hello"} ref={inputRef} id='hello'/>
    </>
  )
}

export default Ref1
