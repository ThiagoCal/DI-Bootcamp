import React from 'react'
import { useState, useEffect } from 'react';

export default function ToDo() {
  const [count, setCount] = useState([])
  const [list, setList] = useState([])

  // setList = (e) =>{
  //   list.push(e.target.value)
  //   console.log(list)
  // }
  // useEffect(()=>{
  //       console.log(count);
  //   setCount(count+1)
  // },[list])
  console.log(list)
  console.log(count)
  return (
    <>
      <div>ToDo</div>
      <input type="text" onChange={(e)=>setList([e.target.value])}/>{list}
      <button type="button" onClick={(list)=>setCount([...list, list])}>Add</button>
    </>
  )
}
