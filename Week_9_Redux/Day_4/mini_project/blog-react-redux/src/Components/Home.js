import React from 'react'
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export default function Home(props) {
  // const [posts, setPosts] = useState([])
  const posts = useSelector(state => {
    return state.posts
  }); 
  // const dispatch = useDispatch()
  
  // useEffect(()=>{
  //     dispatch(addRobots())
  // }, [dispatch])

  console.log('array',posts)
  // let params = useParams()
  return (
    <>
      <div class="container">
        <h4>Home</h4>
          <div className='containerTwo'>
          {
            posts.map(post => {
              return(
                <div className="row" key={post.id}>
                  {/* <div class="col s12 m7"> */}
                    <div className="card card-size">
                      <div className="card-image">
                        <img className="activator" src={process.env.PUBLIC_URL + '/Images/office.jpg'}  alt="card-1"/>
                        {/* <span className="card-title">{post.title}</span> */}
                      </div>
                      <div className="card-content content-space">
                      <span className="title-style activator grey-text text-darken-2">{post.title}</span>
                        {/* <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p> */}
                      </div>
                      <div className="card-action">
                        <Link to={`/${post.id}`}>Show</Link>
                      </div>
                    {/* </div> */}
                  </div>
                </div>
              )
            })
          }
          </div>
          {/* <Link to={`/${item.id}`}>Show</Link> */}
      </div>
    </>
  )
}
