const initState = {
  robots : [],
  filterArr: []
}

export const reducer = (state = initState, action ={}) =>{
  console.log(action.payload)
  switch (action.type) {
    case 'ADD':
      return {...state, robots: action.payload}
    case 'FILTER':
      state.filterArr = state.robots.filter(robot => {
          let input = action.payload.toLowerCase()
          return robot.name.toLowerCase().includes(input)
      })
      return { ...state, filterArr: [...state.filterArr] }
    default:
      return {...state};
  }
}

