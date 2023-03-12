export const showMovie  =  (inputValue) => {
  console.log(inputValue)
  return {
    type: 'MOVIE_SELECTED',
    payload: inputValue
  }
}