import React from 'react'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deletePost } from '../Redux/action';


import { useSelector, useDispatch } from 'react-redux'


export default function Post(props) {
  const params = useParams()
  const navigate = useNavigate()
  const list = useSelector(state=> state.posts)
  let post = list.find(x => x.id === params.id)
  const dispatch = useDispatch()

  const deleteClick = (e) =>{
    console.log(e)
    dispatch(deletePost(e))
    navigate('/')
  }
  
  if(post){
    return (
      <>
        <div className="container">
        <h4>{post.title}</h4>
        <span>{post.body}</span>
  
        <button type="button" onClick={()=>deleteClick(post.id)}>Delete Post</button>
        </div>
      </>
    )
  }else{
    return(
      <div> ERROR 404: No post to diplay.</div>
    )
  }
}
