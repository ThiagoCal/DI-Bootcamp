import React, { Component } from 'react'

export default class Events extends Component{
  constructor(){
    super()
    this.state = {
      isToggleOn: false
    }
  }
  clickMe = () =>{
    return (
      alert('I was clicked!')
    )
  }
  handleKeyPress = (e) => {
      if(e.key === 'Enter'){
        e.target.value = 'React'
        alert(`The Enter key was pressed, your input is: ${e.target.value}`)
      }
  }
  switchToggle = (e) =>{
    this.setState({isToggleOn: true})
    e.target.innerText = 'ON'
    if(this.state.isToggleOn === true){
      this.setState({isToggleOn: false})
      e.target.innerText = 'OFF'}
  }
  render(){
    return(
      <>
        <button type='button' onClick={()=>this.clickMe()}>Click Me</button>
        <input onKeyDown={(e)=>this.handleKeyPress(e)} type="text" placeholder='Press the ENTER key!'></input>
        <button type="button"  onClick={(e)=>this.switchToggle(e)}>OFF</button>
      </>
    )
  }
}
