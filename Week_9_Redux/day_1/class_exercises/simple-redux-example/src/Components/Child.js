import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePropTwo } from '../Redux/action';
import ChangeByClick from './ChangeByClick';

class Child extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render() {
    return (
      <>
        <h2>Child</h2>
        <div>{this.props.prop_one}</div>
        <div>{this.props.a}</div>
        <input type="text" placeholder='change property two' onChange={this.props.changePropertyTwo}></input>
        <div>{this.props.b}</div>
        <h2>End of Child component</h2>
        <ChangeByClick/>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    a: state.property_one,
    b: state.property_two
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changePropertyTwo : (e)=>dispatch(changePropTwo(e.target.value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Child);
