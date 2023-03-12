import { combineReducers } from 'redux'
import movieReducer from './movieReducer'
import selectedMovieReducer from './selectedMovieReducer'

const reducerO = combineReducers({
  movieReducer,
  selectedMovieReducer
})

export default reducerO