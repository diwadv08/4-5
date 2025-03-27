import React from 'react'

function ConditionRender1() {
    let j=[
        {
            name:"Ajay",
            role:"admin",
            place:"trichy"
        },
        {
            name:"Arun",
            role:"user",
            place:"trichy"
        },
        {
            name:"Admin",
            role:"user",
            place:"karur"
        },
        {
            name:"Siva",
            role:"admin",
            place:"trichy"
        }
    ]
  return (
        <>  
        

        {/* {
            j.map((e)=>(

            ))

        } */}
        {/* {j.map((e)=>(
            (e.role==="admin")
            ?
            <div style={{background:"blue",color:"white"}}>
                <h2>Hello {`${e.role}`}</h2>
            </div>
            :
            <div style={{background:"red",color:"white"}}>
                <h2>Hello {`${e.role}`}</h2>
            </div>
        ))} */}
       
    </>
  )
}

export default ConditionRender1
