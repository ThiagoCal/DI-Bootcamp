import React from 'react'
import { connect } from 'react-redux'
import { addCounter, addIfOdd, reduceCounter } from '../Redux/action'

const Counter = (props) => {
  const timeOut = () =>{
    setTimeout(() => {
      props.add();
    }, 1000);
  }
  const addIfOdd = () =>{
    if(props.counter % 2 === 0){
      return props.add()
    }
  }
  return (
    <>
      <div>Counter</div>
      <div>
        <button type="button" onClick={()=>props.reduce()}value="-">-</button>
        <span>
          {props.counter}
        </span>
        <button type="button" onClick={()=>props.add()}value="+">+</button>
      </div>
      <div>
      <button type="button" onClick={addIfOdd}>Add if Odd</button>
      <button type="button" onClick={timeOut}>Time Out</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)