import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRobots } from '../Redux/action';
// import { connect } from 'react-redux'
import { filterBy } from '../Redux/action';
import './Robots.css'

const Robots = (props) => {
  const robots = useSelector(state => {
    return state.filterArr.length === 0 ? state.robots : state.filterArr
  }); 
  const dispatch = useDispatch()
  
  useEffect(()=>{
      dispatch(addRobots())
  }, [dispatch])
  console.log('array',robots)

  const handleChange = (e) => {
    const input = e.target.value
    dispatch(filterBy(input))
  }

  return (
    <>
      <nav className="navbar">
        <div id='logo'>
          <h1>ROBOFRIENDS</h1>
        </div>
        <div className='search-div'>
          <input type="text" name="searchBar" className='search' placeholder="Search Robots" onChange={(e) => handleChange(e)} />
        </div>
        <div>

        </div>
      </nav>
      <section id="robots">
        <div id="container">
        {
        robots.map((robot, index)=>{
          let url = `https://robohash.org/${robot.id}`
          console.log('robots', robot)
          return(
            <div className='robot-div' id={robot.id} key={robot.id} >
              <div className='robot-div-img'>
                <img className='robot-img' src={url} alt={robot.id}/>
              </div>
              <div className='text-area-div'>
                <p className='robot-name'>{robot.name}</p>
                <p className='robot-description'>{robot.email}</p>
              </div>
            </div>
          )
        })
        }
        </div>
      </section>
    </>
  )
}


// const mapStateToProps = (state) => {
//   console.log(state)
//   return{
//     robots : state.robots
//   }
// }

export default Robots