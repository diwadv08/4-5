import React, { useContext, useState } from 'react'
import { cart_content } from '../assets/jsondata'
import { ProductContext } from '../context/ContextFun'

function AddProductForm() {
  let {mapValue,setMapValue}=useContext(ProductContext);
  let [imageUrl,setImageUrl]=useState(0);
  let len_img="200px";
  const imgUpdate=(e)=>{
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setNewFormData((prev)=>{
        return {...prev,[e.target.name]:imageUrl}
    })
  }
  const [newFormData,setNewFormData]=useState({
    id:mapValue.length+1,
    name:"",
    ratings:"",
    description:"",
    img:"",
    price:""
  })
  const Typing=(e)=>{
    let {name,value}=e.target;
    setNewFormData((prev)=>{
        return {...prev,[name]:value}
    })
  }
  const submitFn=(e)=>{
    e.preventDefault();
    console.log(newFormData);

  }



  return (
   <div className="container">
    <div className="row">
        <div className="col-6 align-items-center d-flex">
            {imageUrl===0?
            (<h1>No Image Found</h1>):
            (<img src={imageUrl} alt="" height={len_img} width={len_img} style={{borderRadius:len_img}}/>)}
            
        </div>
        <div className="col-6">
            <form onSubmit={submitFn}>
                <div className="form-group my-2">
                    <label htmlFor="">Product Id</label>
                    <input type='text' name='id' value={mapValue.length+1} className='form-control' readOnly/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">Product Name</label>
                    <input type='text' name='name' className='form-control' onChange={Typing}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">Product ratings</label>
                    <input type='text' name='ratings' className='form-control' onChange={Typing}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">Product description</label>
                    <input type='text' name='description' className='form-control' onChange={Typing}/> 
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">Product price</label>
                    <input type='text' name='price' className='form-control' onChange={Typing}/> 
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">Product Image</label>
                    <input type='file' name='img' className='form-control' onChange={imgUpdate}/>
                </div>
                <input type="submit"  className='form-control bg-success text-white'/>
            </form>
        </div>
    </div>
   </div>
  )
}

export default AddProductForm
