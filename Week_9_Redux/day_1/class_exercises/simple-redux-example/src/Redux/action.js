export const changePropOne  =  (inputValue) => {
  return {
    type: 'PROP_ONE',
    payload: inputValue
  }
}

export const changePropTwo  =  (inputValue) => {
  return {
    type: 'PROP_TWO',
    payload: inputValue
  }
}

export const substitutePropV = () =>{
  return {
    type: 'CHANGE_V'
  }
}