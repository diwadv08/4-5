import React from 'react'
let defaultProps={
  name:false,
  place:false,
  work:false
}
function Day2({a=defaultProps}) {
  let {name,place,work}=a;
  return (
    <div>
      {(name)?
        <h1>Hello I am {name}</h1>
      :''}
      {(place)?
        <h1>I am from {place}</h1>      
      :''}
      {(work)?
      <h1>I am  {work}</h1>
      :''}
      
    </div>
  )
}

export default Day2
