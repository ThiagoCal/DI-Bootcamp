import React, { Component } from 'react'

export default class Color extends Component {
  constructor(){
    super()
    this.state = {
      favoriteColor: 'red'
    }
  }
  componentDidMount = () =>{
    setTimeout(()=>{
      this.setState({favoriteColor: 'yellow'})
    }, 5000)
  }
  changeColor = () =>{
    this.setState({favoriteColor: 'blue'})
  }
  render() {
    return (
      <div style={{backgroundColor: this.state.favoriteColor}}>
        <h3>Color</h3>
        <p>My favorite color is {this.state.favoriteColor}</p>
        <button type="button" onClick={()=>this.changeColor()}>Change favorite color to blue</button>
      </div>
    )
  }
}
