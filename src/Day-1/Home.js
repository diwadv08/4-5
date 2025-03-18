import React from 'react'
import clean0 from "../img/0.jpg"
import clean1 from "../img/1.jpg"
import clean2 from "../img/2.jpg"
import clean3 from "../img/3.jpg"
import clean4 from "../img/4.jpg"
import clean5 from "../img/5.jpg"
import clean6 from "../img/6.jpg"
import clean7 from "../img/7.jpg"
import clean8 from "../img/8.jpg"
import clean9 from "../img/9.jpg"
import clean10 from "../img/10.jpg"
import clean11 from "../img/11.jpg"
import clean12 from "../img/12.jpg"
import clean13 from "../img/13.jpg"
import clean14 from "../img/14.jpg"
import clean15 from "../img/15.jpg"
function Home() {
  let a=[clean0,clean1,clean2,clean3,clean4,clean5,clean6,clean7,clean8,clean9,clean10,clean11,clean12,clean13,clean14,clean15];

  return (
    <>
      {a.map((value,index,array)=>{
        return <img src={value} height={'160'} width={'160'} alt="" />
      })}
    </>
  )
}

export default Home
