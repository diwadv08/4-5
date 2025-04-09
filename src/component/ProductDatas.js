import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom";
import { ProductContext } from '../context/ContextFun';
function ProductDatas() {
  let {mapValue,setMapValue}=useContext(ProductContext);
  let deleteFun=(id)=>{
      let j=mapValue.filter((data)=>{
        return data.id!=id;
      })
      setMapValue(j)
  }
  return (
    <div className="container">
      <div className="row">
        {mapValue.length>0?mapValue.map((e)=>(
          <div className="col-lg-3 my-4 col-md-6" key={e.id}>
            <div className="card">
              <img src={e.img} alt="" height={'250'}/>
              <div className="card-body">
                  <div className="btn-group">
                    <Link to={'product/'+e.id}>
                      <button className='btn btn-primary'>View Product</button>
                    </Link>
                    <button className='btn btn-danger' onClick={()=>{deleteFun(e.id)}} ><i className='fa fa-trash'></i></button>
                  </div>
              </div>
            </div>
          </div>
        )):<center>Not Found</center>}
      </div>
    </div>
  )
}

export default ProductDatas
