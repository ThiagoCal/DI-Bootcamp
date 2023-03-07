import logo from './logo.svg';
import './App.css';
// import Hello from './Hello.js';
import Bye from './Bye';
// import Hey from './Hey';
import Car from './Car';
import {Actors, Actor } from './Actors';
import GetTomHollandId from './GetTomHollandId.js';

const characterJson = {
  "people": [
    {
      "id" : "1",
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
    },
    {
      "id" : "2",
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
    },
    {
      "id" : "3",
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
    }
  ]
}

// const characters = JSON.parse(JSON.stringify(characterJson))

function App() {
  // const carName = 'Lightning Mcqueen'
  // const brand = 'Ford'
  const listCars = [
    {
      id : 1,
      name: "dodge d200",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 2,
      name: "hi 1200d",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 3,
      name: "datsun pl510",
      year: "1971-01-01",
      origin: "Japan"
    },
    {
      id : 4,
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* {
          characters.people.map(item => (
            <ul>
              <li>{item.name}</li>
              <li>{item.height}</li>
              <li>{item.hair_color}</li>
            </ul>
          ))
        } */}
        {/* <GetTomHollandId/> */}
        {/* <Actors/> */}
        <Actor/>
        {/* <Car carBrand={brand} name={carName}/> */}
        <Car cars={listCars}/>
        <Bye/>
      </header>
    </div>
  );
}

export default App;
