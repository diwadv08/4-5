import React from 'react'
import { cart_content } from './assets/jsondata'

function Cards() {
  let btnCss='';
  return (
    <div className='container-fluid'>
        <div className="container">
            <div className="row">
                {cart_content.map((e)=>{
                    if(e.ratings>=1 && e.ratings<2){
                        btnCss="danger"
                    }
                    else if(e.ratings>=2 && e.ratings<4){
                        btnCss="warning"
                    }
                    if(e.ratings>=4 && e.ratings<=5){
                        btnCss="success"
                    }
                    return (
                        <div className="col-lg-4 col-md-6 text-center my-2">
                            <div className="card shadow">
                                <center className='mt-3'>
                                <img src={e.img} className='border border-secondary border-5' alt="" width={"80px"} height={"80px"} style={{borderRadius:"80px"}}/>
                                </center>
                                <div className="card-body">
                                    <h5>{e.name}</h5>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cards
