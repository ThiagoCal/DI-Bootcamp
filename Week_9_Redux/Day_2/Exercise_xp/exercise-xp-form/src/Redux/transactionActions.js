export const insertData = (data) => {
  return {
    type: 'INSERT',
    payload: data
  }
}

export const handleUpdate = (data) => {
  return {
    type: 'UPDATE',
    payload: data
  }
}

export const handleDelete = (id) => {
  return {
    type: 'DELETE',
    payload: id
  }
}

export const updateIndex = (index) => {
  return {
    type: 'UPDATE-INDEX',
    payload: index
  }
}


export const getUsers = () => (dispatch, getState) => {
  console.log(getState)
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type:'USERS',
      payload: data
    })
  })

  // return{
  //   type:'USERS',
  //   payload: arr
  // }
}