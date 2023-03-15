export const addRobots = () => (dispatch, getState) =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>{
    dispatch({
    type: 'ADD',
    payload: data})
  })
}


export const filterBy = (data) => {
  return {
    type: 'FILTER',
    payload: data
  }
}