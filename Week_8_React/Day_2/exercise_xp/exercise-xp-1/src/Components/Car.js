import React, { Component } from 'react'
import Garage from './Garage'
// export default function Car(props) {
//   return (
//     <div><p>This car is {props.model}</p></div>
//   )
// }

export default class Car extends Component{
  constructor(){
    super()
    this.state ={
      model: "Mustang",
      color: "blue"
    }
  }
  render(){
    return(
      <>
        <Garage size={'small'}/>
        <p>This car is a {this.state.color} {this.state.model}</p>
      </>
    )
  }
}