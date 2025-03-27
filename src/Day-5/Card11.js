import React, { useState } from 'react'

function Card11() {
    const [defaultData,setDefaultData]=useState({
        heading:"",description:"",color:""
    })
    const [allData,setAllData]=useState([]);
    const typing=(e)=>{
          setDefaultData((data)=>{
            return {
                ...data,[e.target.name]:e.target.value
            }
          }) 
    }
    const submitFn=((e)=>{
        allData.push(defaultData);
        setDefaultData({
            heading:"",description:"",color:""
        })
        e.preventDefault();
        console.log(allData);
        
    })
  return (
    <>
      <form>
        <input type="text" name='heading' placeholder='Enter Card Title' className='form-control' value={defaultData.heading} onChange={typing}/>
        <input type="text" name='description' placeholder='Product Description'  className='form-control' value={defaultData.description} onChange={typing}/>  
        <input type="color" name='color' value={defaultData.color} onChange={typing}/>
        <input type="submit" className='form-control bg-danger text-light' onClick={submitFn}/>
      </form>
    </>
  )
}

export default Card11
