// import logo from './logo.svg';
import './App.css';
// import users from './users.json'
import User from './User'
// import UserC from './UserC';
import { Component} from 'react';
import SearchBox from './Search'

class App extends Component {
  constructor(){
    super()
    this.state ={
      users_arr: [],
      color: 'yellow',
      text: ''
    }
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    // this.setState({users_arr: users})
    setTimeout(()=>{
      this.setState({color: 'pink'})
    }, 5000)
  }

  showUsers = () =>{
    // this.setState({users_arr: users})
  }

  getData = async () =>{
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await res.json()
    this.setState({users_arr: data})
  }

  search = (ev) =>{
    // ev.preventDefault()
    this.setState({text: ev.target.value})
    
  }

  render(){
    console.log('render')
    const filter_user = this.state.users_arr.filter(item => {
      console.log(item)
      return item.name.toLowerCase().includes(this.state.text.toLowerCase())
    })
    return (
      <div className="App" style={{backgroundColor:this.state.color}}>
        <div>
          <button type='button' onClick={()=>this.getData()}>Fetch users</button>
          <SearchBox search={this.search}/>
          {/* <input type="text" onChange={(e)=>this.search(e)}></input> */}
          {/* <button type='button' onClick={()=>this.showUsers()}>Show users</button> */}
        </div>
        {
          filter_user.map((item, index) =>{
            return (
              <div key={index}>
                <User name={item.name} email={item.email} username={item.username} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
