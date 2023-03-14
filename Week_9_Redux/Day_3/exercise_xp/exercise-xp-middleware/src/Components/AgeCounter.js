import React from 'react'
import { connect } from 'react-redux'
import { addCounter, reduceCounter } from '../Redux/action'

const AgeCounter = (props) => {

  return (
    <>
      <div>Age Counter</div>
      <div>
        <button type="button" onClick={()=>props.reduce()}value="-">Reduce Age</button>
        <span>
          Age: {props.counter}
        </span>
        <button type="button" onClick={()=>props.add()}value="+">Add Age</button>
      </div>
    </>
  )
}

const mapStateToProps = (state) =>{
  return{
    counter : state.count
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    add : ()=>dispatch(addCounter()),
    reduce : ()=>dispatch(reduceCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgeCounter)