const initState = {
  property_one: 'text one from store',
  property_two: 'this is a second property'
}

export const reducer = (state = initState, action = {}) => {
  switch (action.type){
    case 'PROP_ONE':
      return {...state, property_one: action.payload}
    case 'PROP_TWO':
      return {...state, property_two: action.payload}
    case 'CHANGE_V':
      return {...state, property_one: state.property_two, property_two: state.property_one}
    default:
      return {...state}
  }
}