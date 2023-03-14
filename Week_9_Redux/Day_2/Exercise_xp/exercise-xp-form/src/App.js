import './App.css';
import TransactionForm from './Components/TransactionForm';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './Redux/transactionActions';


function App() {
  // const [users, setUsers] = useState([])
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(()=>{
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
    //   // setUsers(data)
      dispatch(getUsers())
    // })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        {
          users.map((item,i)=>{
            return(
              <div key={i}>
                {item.name}
              </div>
            )
          })
        }
        {/* <TransactionForm/> */}
      </header>
    </div>
  );
}

export default App;
