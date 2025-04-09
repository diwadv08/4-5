import React, {  useReducer } from 'react'

function Reducers1() {

  const reducerFn=(state,action)=>{
    if(action.type){
      if(action.type=="dec"){
        return {c:state.c-1}
      }
      if(action.type=="inc"){
        return {c:state.c+1}
      }
    }
  }

  const [state,dispatch]=useReducer(reducerFn,{c:100})

  return (
    <div>
      <button onClick={()=>{dispatch({type:"dec"})}}>-</button>
      <span>{state.c}</span>
      <button onClick={()=>{dispatch({type:"inc"})}}>+</button>
    </div>
  )
}

export default Reducers1
