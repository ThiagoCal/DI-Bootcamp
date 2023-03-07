import React from 'react'

const User = (props) =>{
  const user_style = {diplay:'inline-block', padding:'10px', margin:'20px', border:'1px solid black' }
  console.log('props', props)
  return(
    <div style={user_style}>
      <h4>{props.name}</h4>
      <p>{props.email}</p>
      <p>{props.username}</p>
    </div>
  )
}

export default User