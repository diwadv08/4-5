import React, { createContext, useState } from 'react'
import { cart_content } from '../assets/jsondata';
export let ProductContext=createContext();
function ContextFun({children}) {
  
  let [mapValue,setMapValue]=useState(cart_content);

  let myDatas={mapValue,setMapValue}
  return (
    
    <ProductContext.Provider value={myDatas}>
      {children}
    </ProductContext.Provider>
  )
}

export default ContextFun
