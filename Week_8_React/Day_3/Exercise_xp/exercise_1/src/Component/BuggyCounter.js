import React, { Component } from 'react'



export default class BuggyCounter extends Component{
   constructor(){
    super()
    this.state = {
      counter: 0
    }
   }

   addCounter = (e) =>{
    e.preventDefault();
    this.setState({counter: this.state.counter + 1})
   }
   render(){
    if(this.state.counter > 4){
      throw new Error('Crashed.. count above 5')
    }
    console.log(this.state.counter)
    let counter = this.state.counter
    return(
      <>
        <p>Counter: {counter}</p>
        <button type='button' onClick={(e)=>this.addCounter(e)}>Add Counter</button>
      </>
    )
   }
}