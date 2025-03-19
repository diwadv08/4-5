import React, { useState } from 'react'

function State2() {
  let [data,setData]=useState({
        name:"",age:"",mark:""
  })

  let [allData,setAllData]=useState([])
  const changeInput=(e)=>{
    let{name,value}=e.target;
    setData((e)=>{
        return {
            ...e,[name]:value
        }
    })
  }
  const submitfn=(e)=>{
    e.preventDefault();
    allData.push(data);
    setData({name:"",age:"",mark:""})
    console.log(allData);
  }
  return (
    <div>
      <form>
        <input type="text" value={data.name} name='name' className='form-control' placeholder='Name' onChange={changeInput}/>
        <input type="text" value={data.age} name='age' className='form-control' placeholder='Age' onChange={changeInput}/>
        <input type="text" value={data.mark} className='form-control' name='mark' placeholder='Mark' onChange={changeInput}/>
        <br />
        <input type="submit" onClick={submitfn}/>
      </form>


    </div>
  )
}

export default State2
