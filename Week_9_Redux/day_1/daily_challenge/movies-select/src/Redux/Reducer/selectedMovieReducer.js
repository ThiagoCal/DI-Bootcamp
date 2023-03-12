const initValue ={
  value: ''
}

const selectedMovieReducer = (state = initValue, action ={}) => {
  console.log(action)
  switch(action.type) {
      case 'MOVIE_SELECTED':
          return {...state, value: action.payload}
      default:
          return state;
  }
}

export default selectedMovieReducer