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
  const deleteFun=(e)=>{
    setAllData(allData.filter((data,index)=>{
      if(index!==e){
        return data;
      }
    }))
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
      <table className='table table-bordered table-striped' cellPadding={10}>
       <thead>
       <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Mark</th>
          <th>Action</th>
        </tr>
       </thead>
       <tbody>
      {allData.map((e,i)=>{
        let s_no=i+1;
        return(
            <tr key={s_no}>
              <td>{s_no}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.mark}</td>
              <td>
                <button className='btn text-light bg-danger btn-sm py-0' onClick={()=>{
                  deleteFun(i)
                }}>Delete</button>
              </td>
            </tr>
        )
      })}
      </tbody>
      </table>

    </div>
  )
}

export default State2
