import React, { Component } from 'react'
import {connect} from 'react-redux'
import { showMovie } from '../Redux/Action'
import MovieDetails from './MovieDetails'

class MovieList extends Component {
  constructor(){
    super()
    this.state ={

    }
  }
  render(){
    let array = this.props.arrayMovies
    return(
      <>
       <div>MovieList</div>
       <ul>
        {
          array.map(item =>{
            let movie = {item}
            return(
              <li>{item.title} <button type="button" onClick={()=>this.props.showDetails(movie)}>More info</button></li>
            )
          })
        }
       </ul>
       <MovieDetails/>
      </>
    )
  }
}


const mapStateToProps = (state) =>{
  return{
    arrayMovies : state.movieReducer.movies
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    showDetails : (e)=>dispatch(showMovie(e))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)