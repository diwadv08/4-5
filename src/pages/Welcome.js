import React from 'react'
import { useParams } from 'react-router-dom'

function Welcome() {
  let {user_name}=useParams();
  
  return (
    <div>
      <h1>{"Welcome "+user_name}</h1>
    </div>
  )
}

export default Welcome
