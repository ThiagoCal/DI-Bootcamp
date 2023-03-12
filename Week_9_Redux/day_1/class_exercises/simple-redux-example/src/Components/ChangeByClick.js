import { connect } from "react-redux"
import { substitutePropV } from "../Redux/action"

const ChangeByClick = (props) =>{
  return (
    <div>
      <button onClick={()=>props.dispatch(substitutePropV())}>Change prop one to prop two</button>
      {/* also could be don as follow:
      <button onClick={()=>props.dispatch({type: 'CHANGE_V'})}>Change prop one to prop two</button> */}
    </div>
  )
}

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     substituteValue : ()=>dispatch(substitutePropV()) 
//   }
// }

// export default connect(null, mapDispatchToProps)(ChangeByClick)
export default connect()(ChangeByClick)