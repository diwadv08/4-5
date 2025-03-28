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

    const delfun=(e)=>{
        let {id}=e.target;
        let j=allData.filter((data,i)=>{
          if(!(id===i.toString())){
            return data;
          }
        })
        setAllData(j) 
    }
  return (
    <>
    
      <h4>Form Data</h4>
      <form>
        <input type="text" name='heading' placeholder='Enter Card Title' className='form-control mb-3' value={defaultData.heading} onChange={typing}/>
        <input type="text" name='description' placeholder='Product Description'  className='form-control mb-3' value={defaultData.description} onChange={typing}/>  
        <input type="color" name='color' value={defaultData.color} onChange={typing}/>
        <input type="submit" className='form-control bg-danger text-light' onClick={submitFn}/>
      </form>
      <div className="container mt-4">
        <div className="row">
          {allData.map((e,i)=>(
              <div className="col-lg-4 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h1>{e.heading}</h1>
                    <i onClick={delfun} id={i} className='fa fa-trash'></i>
                    <p>{e.description}</p>
                    <button className='btn w-100' style={{background:e.color}}>Btn Text</button>
                  </div>
                </div>
            </div>
          ))}
        
        </div>
      </div>
    </>
  )
}


export default Card11
