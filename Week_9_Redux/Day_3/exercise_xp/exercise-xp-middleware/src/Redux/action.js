export const addCounter = () => {
  return {
    type: 'INCREMENT',
    // payload: index
  }
}


export const reduceCounter = () => {
  return {
    type: 'DECREMENT',
    // payload: index
  }
}

// export const addIfOdd = () =>{
//   return {
//     type: 'IF_ODD'
//   }
// }
