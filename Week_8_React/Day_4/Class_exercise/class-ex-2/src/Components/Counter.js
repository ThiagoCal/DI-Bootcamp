import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super()
    this.state ={
      count: 0
    }
  }
  add = () =>{
    this.setState({count: this.state.count + 1})
  }
  render() {
    if(this.state.count > 5){
      throw Error('Crashed.. count above 5')
    }
    return (
      <div>
        <h4> Counter {this.state.count}</h4> <br/>
        <button onClick={this.add}>Add +1</button>
      </div>
    )
  }
}
