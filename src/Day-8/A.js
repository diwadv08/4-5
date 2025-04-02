import React, { useContext } from 'react'
import { Mycontext } from './Context1'

function A() {
  let {i,j,k,l}=useContext(Mycontext)
  let c={a:"Hello"}
  return (
    <div>
      <h1>{k}</h1>
    </div>
  )
}

export default A
