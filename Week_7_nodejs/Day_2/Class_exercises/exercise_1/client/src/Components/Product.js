import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import React from 'react'


export default function Product() {
  const [product, setProduct] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const params = useParams()


  useEffect(()=>{
    fetch(`/api/products/${params.id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])
  
  const update = (e) =>{
    e.preventDefault()
    fetch(`/api/products/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, price})
    })
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

   return (
    <>
      <div>Product</div>
      
      {
        product.map( item =>{ 
        return(
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <Link to={`/`}>Show All</Link>
          </div>
        )})
      }
    </>
  )
}
