import React from 'react'
import { cart_content } from '../assets/jsondata'
import { useParams } from 'react-router-dom'

function Product() {
  let {id} = useParams();
  let matching_result=cart_content.filter((e)=>{
    if(e.id===Number(id)){
        return e;
    }
  })
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12">
                <h1>Products</h1>
            </div>
            {matching_result.map((data)=>(
            <>
                <div className="col-lg-6">
                    <img src={data.img} alt="" width={'100%'} />
                </div>
                <div className="col-lg-6">
                    <h1>{data.name}</h1>
                    <p>{data.description}</p>
                    <div className="d-flex">
                    <p className='me-4'>Rs.{data.price}</p>
                    <p>Rs.{data.old_price}</p>
                    </div>
                </div>
            </>
            ))}
           
        </div>
    </div>
  )
}

export default Product
