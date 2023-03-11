import React, { Component } from 'react'

export default class Color extends Component {
  constructor(){
    super()
    this.state = {
      favoriteColor: 'red',
      show: true
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

  changeShowValue= (e)=>{
    e.preventDefault()
    this.setState({show: false})
  }
  componentDidUpdate(){
    setTimeout(()=>{
        this.setState({favoriteColor: 'green'})
      }, 6000)
      const div = document.createElement("div");
      div.innerText = `The actual value is ${this.state.favoriteColor}`
      const parentDiv = document.getElementById('color-div')
      parentDiv.appendChild(div)
    }
      
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log(prevState)
    let prev = prevState
    const div = document.createElement("div");
    div.innerText = `The previous value was ${prev.favoriteColor}`
    const parentDiv = document.getElementById('color-div')
    parentDiv.appendChild(div)
    return null
    // this.setState({message: prevState})
  }
  shouldComponentUpdate(nextProps, nextState){
    return true;
  }
  render() {
    return (
      <>
        <div id="color-div" style={{backgroundColor: this.state.favoriteColor}}>
          <h3>Color</h3>
          <p>My favorite color is {this.state.favoriteColor}</p>
          <button type="button" onClick={()=>this.changeColor()}>Change favorite color to blue</button>
          {this.state.show ? <Child /> : null}
          <button type='button' onClick={(e)=>this.changeShowValue(e)}>Delete Header</button>
        </div>
      </>
    )
  }
}

export class Child extends Component{
  constructor(){
    super()
    this.state = {}
  }
  componentWillUnmount(){
    alert('unmounted message')
  }
  render(){
    return(
      <>
        <h4>Hello World!</h4>
        
      </>
    )
  }
}

