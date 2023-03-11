import React, { Component } from 'react'
import Results from './Results'
import { useNavigate } from 'react-router-dom';

export default class Form extends Component {
  constructor(){
    super()
    this.state ={
      first_name: '',
      last_name: '',
      age: '',
      gender: '',
      destination: '',
      dietary: [],
      formSubmitted: false
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state.first_name, this.state.last_name, this.state.age, this.state.gender, this.state.destination, this.state.dietary)
    this.setState({formSubmitted: true})
    
    const formData = new URLSearchParams();
    formData.append("firsName", this.state.first_name)
    formData.append("lastName", this.state.last_name)
    formData.append("age", this.state.age)
    formData.append("gender", this.state.gender)
    formData.append("destination", this.state.destination)
    formData.append("lactoseFree", this.state.dietary.includes("lactoseFree") ? "on" : "off")
    formData.append("nutsFree", this.state.dietary.includes("nutsFree") ? "on" : "off")
    formData.append("isVegan", this.state.dietary.includes("isVegan") ? "on" : "off")
    const navigate = useNavigate();
    const queryString = formData.toString();
    const url = queryString ? `/?${queryString}` : '/';
    navigate(`localhost:3000${url}`)
  }
  handleChange = (e)=>{
    let value = ''
    if(e.target.type === 'checkbox'){
      console.log(e.target.value)
      if(e.target.checked){
        console.log('hi')
        value = e.target.value
        this.state.dietary.push(value)
      }
    } else{
      value = e.target.value
    }
    this.setState({ [e.target.name] : value })
    // e.target.type === "checkbox" ? console.log('target', e.target.checked, e.target.value) : console.log('hi')
    console.log(this.state.dietary)
  }
  render() {
    return (
      <>
        <div>
          <h1>Sample Form</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="First Name" name="first_name" onChange={this.handleChange}></input>
            <br/>
            <input type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange}></input>
            <br/>
            <input type="text" placeholder="Age" name="age" onChange={this.handleChange}></input>
            <br/>
            <label>
              <input type="radio" name="gender" value="male" onChange={this.handleChange}></input>
              Male
            </label>
            <br/>
            <label>
              <input type="radio" name="gender" value="female "onChange={this.handleChange}></input>
              Female
            </label>
            <br></br>
            <select onChange={this.handleChange} name="destination">
              <option value="">--Please choose a destination</option>
              <option value="japan">Japan</option>
              <option value="thailand">Thailand</option>
              <option value="brazil">Brazil</option>
            </select>
            <br/>
            <div className="restrictions">
              <input type="checkbox" name="nutsFree" value="nutsFree" onChange={this.handleChange}></input>
              <span>Nuts free</span>
              <br/>
              <input type="checkbox" name="lactoseFree" value="lactoseFree" onChange={this.handleChange}></input>
              <span>Lactose Free</span>
              <br/>
              <input type="checkbox" name="isVegan" value="isVegan" onChange={this.handleChange}></input>
              <span>Vegan</span> 
            </div>
            <br></br>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <br/>
        {this.state.formSubmitted && <Results data={this.state}/>}
      </>
    )
  }
}
