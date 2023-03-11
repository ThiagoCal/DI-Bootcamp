import {useState, useEffect} from 'react'

const CounterHook = (props) => {
  // const [state, setState] = useState(0)
  const [count, setCount] = useState(0)
  //the count is like this.state = {count:O}
  //the setCount is like this.setState({count: 10} or wtv do you want to do with it)
  // const [name, setName] = useState('')
  // const [users, setusers] = useState([])
  const [email, setEmail] = useState('')
  //useEffect is like componentDidMount and componentDidUpdate together
  //to use it like only componentDidMount you put brackets at the end of it
  //useEffect is like a add.eventlistener you can have as many as you want

  const [users, setUsers] = useState([])

  // useEffect(()=>{
  //   console.log(count);
  //   setCount(count+1)
  // },[email])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>{
      setUsers(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <>
      Count: {count}
      <input type="text" onChange={(e)=>setEmail(e.target.value)}/>{email}
      <button type="button" onClick={()=>setCount(count+1)}>Add</button>
      {
        users.map( item => {
          return(
            <>
             <p> { item.name }</p>
            </>
          )
        })
      }
    </>
  )
}

export default CounterHook