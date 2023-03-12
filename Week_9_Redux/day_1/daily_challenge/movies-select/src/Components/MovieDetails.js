import React, { Component } from 'react'
import {connect} from 'react-redux'
import { showMovie } from '../Redux/Action'

// import { connect } from 'react-redux';

const MovieDetails = (props) => {
    console.log('props',props)
    if(!props.selectedMovie) {
        return (
            <div className="details-container" style={{width: '70%'}}>
                <h2>Movie</h2>
                <div className="properties">
                    <p>Select Movie</p>
                </div>
            </div>
            
        )       
    }
    else{
        return (
        
            <div className="details-container">
                <h2>Movie</h2>
                <div className="properties">
                    <p>Title: {props.selectedMovie.title}</p>
                    <p>Release Date: {props.selectedMovie.releaseDate}</p>
                    <p>Rating: {props.selectedMovie.rating}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state.selectedMovieReducer.value.item)
    return {
        selectedMovie: state.selectedMovieReducer.value.item
    }
}

export default connect(mapStateToProps)(MovieDetails);