import React, { Component } from 'react'

export default class Phone extends Component {
  constructor(){
    super()
    this.state ={
      brand: "Samsung",
      model: "Galaxy S20",
      color: "black",
      year: 2020
    }
  }
  changeColor = () =>{
    this.setState({color: 'blue'})
  }
  shouldComponentUpdate(nextProps, nextState){
    return false;
  }
  render() {
    return (
      <div>
        <h3>My phone is a {this.state.brand}</h3>
        <p>It's a {this.state.color} {this.state.model} from {this.state.year}</p>
        <button type='button' onClick={()=>this.changeColor()}>Change color</button>
      </div>
    )
  }
}
