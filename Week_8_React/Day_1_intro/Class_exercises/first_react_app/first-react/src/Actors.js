// In a separate js file, create an Actor component.
// In the App component, create an array of objects containing three actors. Requirement: Each object should have the properties "firstName", "lastName" and "image" (a url).
// In the App component, call the Actor component and pass the actors list as attribute.
// Render the list of actors.

import {React, Component} from "react"
let actors = {
  "Actors": [{
      "id": 1,
      "name": "Tom Cruise",
      "age": 56,
      "Born At": "Syracuse, NY",
      "Birthdate": "July 3, 1962",
      "photo": "https://jsonformatter.org/img/tom-cruise.jpg",
      "wife": null,
      "weight": 67.5,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Suri",
        "Isabella Jane",
        "Connor"
      ]
    },
    {
      "id": 2,
      "name": "Robert Downey Jr.",
      "age": 53,
      "Born At": "New York City, NY",
      "Birthdate": "April 4, 1965",
      "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg",
      "wife": "Susan Downey",
      "weight": 77.1,
      "hasChildren": true,
      "hasGreyHair": false,
      "children": [
        "Indio Falconer",
        "Avri Roel",
        "Exton Elias"
      ]
    }
  ]
}

const actorList = JSON.parse(JSON.stringify(actors))
const Actors = () =>{
  return(
    actorList.Actors.map(actor => (
        <div id={actor.id} key={actor.id}>
          <h1>Name: {actor.name}</h1>
          <p>Age: {actor.age}</p>
          <img src={actor.photo} alt="actors"></img>
        </div>
    ))
  )
}

export class Actor extends Component{
  constructor(id, name, age){
    super()
    this.state = {
      id: 1,
      name: 'Brad',
      age: 56
    }
  }
  render(){
    return(
      <>
        <h1>{this.state.name}</h1>
        <p>{this.state.age}</p>
      </>
    )
  }
}

export default Actors 