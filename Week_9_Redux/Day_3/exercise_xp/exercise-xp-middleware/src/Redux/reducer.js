const initState = {
  count : 0
}


const reducer = (state = initState, action ={})=>{
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count+1}
    case 'DECREMENT':
      return {...state, count: state.count-1}
    // case 'IF_ODD':
    //   if(state.count % 2 === 0){
    //     return {...state, count: state.count+1}
    //   } else{
    //     return {...state}
    //   }
    default:
      return {...state}
  }
}

export default reducer