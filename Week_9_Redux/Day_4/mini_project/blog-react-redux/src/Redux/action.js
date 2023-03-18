export const addValue = (data) =>{
  return{
    type: 'DISPLAY',
    payload: data
  }
}


export const deletePost = (data) =>{
  console.log(data)
  return{
    type: 'DELETE',
    payload: data
  }
}