// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      username: '',
      message: '',
      color: '',
      onoff: ''
    }
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.email, this.state.username, this.state.message, this.state.color, this.state.onoff)
  }
  handleChange = (e)=>{
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    this.setState({ [e.target.name] : value })
  }
  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email" name="email" onChange={this.handleChange}></input><br></br>
          <input type="text" placeholder="username" name="username" onChange={this.handleChange}></input>
          <br></br>
          <textarea type="textarea" placeholder="message" name="message" onChange={this.handleChange}></textarea>
          <br></br>
          <select onChange={this.handleChange} name="color">
            <option value="">Choose a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="greeb">Green</option>
          </select>
          <br></br>
          ON / OFF: <input type="checkbox" name="onoff" onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
