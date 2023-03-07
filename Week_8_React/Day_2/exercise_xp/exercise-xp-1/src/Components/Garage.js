import React from "react";

// export default class Garage extends Component{
//   constructor(){
//     super()
//     this.state = {
//       size: "small"
//     }
//   }
//   render(){
//     return(
//       <></>
//     )
//   }
// }

const Garage = (props) =>{
  return (
    <>
      <p>Who lives in my {props.size} Garage?</p>
    </>
  )
}

export default Garage