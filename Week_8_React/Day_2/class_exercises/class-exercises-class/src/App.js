// import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';
import Actors from './Components/Actors';
import Sunrise from './Components/Sunrise';

const carColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown"
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Car colors={carColors}/>
        <Actors/> */}
        <Sunrise/>
      </header>
    </div>
  );
}

export default App;
