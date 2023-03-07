import React, { Component } from 'react';

class Car extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: 'blue',
      brand: 'Ford',
      model: "Mustang",
      year: 1998
    }
  }
  changeColor = () =>{
    this.setState({color: 'green'})
  }

  randomColors = () =>{
    let {colors} = this.props
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    this.setState({color: randomColor})
  }

  render(){
    return (
      <>
        <h1>
          Hello I am a {this.state.color} car <br></br>
          My brand: {this.state.brand}
        </h1>
        <p style={{backgroundColor: this.state.color}}>Model: {this.state.model} from {this.state.year}</p>
        <button type='button' onClick={this.changeColor}>Change Color</button>
        <button type='button' onClick={this.randomColors}>Random Color</button>
      </>
    )
  }
}

export default Car