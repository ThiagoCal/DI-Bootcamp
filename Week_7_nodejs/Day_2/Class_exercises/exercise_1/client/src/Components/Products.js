import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Products = (props) =>{
  const [products, setProducts] = useState([])
  const [searchText, setSearch] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

 

  useEffect(()=>{
    if(searchText.length === 0){
      const getProducts = async()=>{
        try{
          let response = await fetch('/api/products');
          let data = await response.json();
          setProducts(data);
        }
        catch(e){
          console.log(e)
        }
      }
      getProducts()
    }
  },[searchText])

  // useEffect(()=>{
  //   searchProducts()
  // },[searchText])
  
  const searchProducts = async() =>{
    console.log('searchtex', searchText)
    try{
      const response1 = await fetch(`/api/products/search?q=${searchText}`)
      const data1 = await response1.json()
      console.log('data',data1)
      setProducts(data1)
    }catch(e){
      console.log(e)
    }
  }

  const add = (e) =>{
    e.preventDefault()
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, price})
    })
    .then(res => res.json())
    .then(data => {
      setProducts(data)
    })
    .catch(err => {
      console.log(err)
    })
  }


  
  return (
    <>
      <div>Shop</div>
      Search:<input type="text" onChange={(e)=>setSearch(e.target.value)}></input>
      <button onClick={()=>searchProducts()}>Search</button>
      <div>
        <h4>Add Product</h4>
        <form onSubmit={add}>
          Name:<input type="text" onChange={(e)=>setName(e.target.value)}></input>
          Price:<input type="text" onChange={(e)=>setPrice(e.target.value)}></input>
          <input type="submit" value="Add"/>
        </form>
      </div>
      <div style={{display: 'flex'}}>
      {
        products.map(item =>{
          return(
            <div key={item.id} style={{display: 'inline-block', margin:"20px", padding:"20px", border:"1px solid black" }}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <Link to={`/${item.id}`}>Show</Link>
            </div>
          )
        }
      )}
      </div>
    </>
  )
}


export default Products