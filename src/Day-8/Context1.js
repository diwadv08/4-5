import React, { createContext } from 'react'
export let Mycontext=createContext();
function Context1({children}) {
  let i=10;
  let j=20;
  let k=30;
  let l=40;
  let myObj={i,j,k,l};
  return (
    <Mycontext.Provider value={myObj}>
        {children}
    </Mycontext.Provider>
  )
}

export default Context1
