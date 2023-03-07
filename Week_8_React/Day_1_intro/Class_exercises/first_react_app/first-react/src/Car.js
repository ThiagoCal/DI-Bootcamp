import React from "react"
const Car = (props) => {
  return(
    props.cars.map(car => (
      <>
        <p>Car:</p>
        <p>{car.name}</p>
        <p>{car.year}</p>
        <p>{car.origin}</p>
      </>
    ))
  )
}
export default Car