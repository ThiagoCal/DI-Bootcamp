import React, {Component} from 'react'

export default class Sunrise extends Component{
  constructor(){
    super()
    this.state = {
      country: 'Israel',
      city: 'Tel Aviv'
    }
  }

  componentDidMount(){
    fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
    .then((res)=>res.json())
    .then((data)=> this.setState({hourSunrise: data.results.sunrise}))
    .catch(function(error){console.log(`We have an ${error}`)})
  }
  render(){
    let { country, city, hourSunrise} = this.state
    return(
      <>
      <p>Sunrise in {city} - {country}: {hourSunrise}</p>
      </>
    )
  }
}