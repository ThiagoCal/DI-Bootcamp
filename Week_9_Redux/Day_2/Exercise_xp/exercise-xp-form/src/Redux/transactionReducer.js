import { addToLocalStorage, getFromLocalStorage } from "../helpers/storage"


const initState = {
  currentIndex: -1,
  list: getFromLocalStorage('transactions'),
  users: []
}

const reducer = (state = initState, action ={}) =>{
  // console.log('actionpayload', action.payload)
  switch(action.type){
    case 'USERS':
      return {...state, users:action.payload}
    case 'INSERT':
      state.list.push(action.payload)
      addToLocalStorage('transactions', [...state.list])
      return {...state, list: [...state.list], currentIndex: -1}

    case 'UPDATE-INDEX':
      return {...state, currentIndex: action.payload}

    case 'UPDATE':
      state.list[state.currentIndex] = action.payload
      addToLocalStorage('transactions', [...state.list])
      return {...state, currentIndex:-1, list: [...state.list]}

    case 'DELETE':
      state.list.splice(action.payload, 1)
      addToLocalStorage('transactions', [...state.list])
      return {...state, currentIndex:-1, list: [...state.list]}

    default:
      return {...state}
  }
}

export default reducer