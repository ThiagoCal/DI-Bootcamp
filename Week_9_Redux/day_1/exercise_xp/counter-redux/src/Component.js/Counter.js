import React from 'react'
import {connect} from 'react-redux'
import { addCounter } from '../Redux/Action'
import { reduceCounter } from '../Redux/Action'


const Counter = (props) =>{
  console.log(props)
  return (
    <>
      <div>Counter</div>
      <button type="button" onClick={()=>props.addNumber()}>+</button>
      <span>{props.counter}</span>
      <button type="button" onClick={()=>props.reduceNumber()}>-</button>
    </>
  )
}

const mapStateToProps = (state) =>{
  return {
    counter: state.count
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    addNumber: () => dispatch(addCounter()),
    reduceNumber: () => dispatch(reduceCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);