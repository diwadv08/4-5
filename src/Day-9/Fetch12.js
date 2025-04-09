import React, { useEffect, useState } from 'react'
import axios from "axios"
function Fetch12() {
  let [datas,setDatas]=useState([]);
  let [filters,setFilter]=useState([]);
  let [myText,setMyText]=useState("");
  useEffect(()=>{
    let urlFetch=async()=>{
        // const url=await axios.get('https://jsonplaceholder.typicode.com/photos');
        // console.log(url.data);
        const url=await fetch('https://jsonplaceholder.typicode.com/photos');
        let json_data=await url.json();
        setDatas(json_data)
        setFilter(json_data)
      }
      urlFetch()
  },[])
  
  const typing=(e)=>{
    setMyText(e.target.value)
    setFilter(datas.filter((data)=>{
        if(data.title.includes(e.target.value)){
            return data;
        }
    }))
  }
  
  return (
    <>
      
      <div className="container mt-3">
        <input type="text" className='form-control mb-4' placeholder='Search..........' onKeyUp={typing}/>
        {(filters.length>0)
        ?<table className='table table-danger table-bordered table-striped border'>
        <tbody>
        <tr>
            <th>SI.No</th>
            <th>Name</th>
            <th>AlbumId</th>
            <th>Title</th>
            <th>Url</th>
        </tr>
        {filters.map((e,i)=>(
            <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.albumId}</td>
                <td>{e.title}</td>
                <td>{e.url}</td>
            </tr>
        ))}
        </tbody>
    </table>
    :
        <div>
            <center>
                <h1>No users found "<u>{myText}</u>"</h1>
            </center>
        </div>
        
        }
        
      </div>
    </>
  )
}

export default Fetch12
