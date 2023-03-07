import {React, Component} from 'react'

export default class Actors extends Component{
  constructor(){
    super()
    this.state = {
      id: 1,
      first_name: 'Brad',
      last_name: 'Pitt',
      image:' https://resizing.flixster.com/fTmkkK2g0AApV8vnSJHYszbolZ0=/218x280/v2/https://flxt.tmsimg.com/assets/1366_v9_bc.jpg',
      age: 56
    }
  }
 
  render(){
    return(
      <>
        <h1>Actor's name: {this.state.first_name} {this.state.last_name}</h1>
        <p>Age: {this.state.age}</p>
        <img src={this.state.image} alt='brad-pitt'></img>
        
      </>
    )
  }
}
