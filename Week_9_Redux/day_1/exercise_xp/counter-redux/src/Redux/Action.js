export const addCounter = () =>{
  return{
    type: 'INCREASE_COUNT',
  }
}

export const reduceCounter = () =>{
  return{
    type: 'DECREASE_COUNT',
  }
}