import logo from './logo.svg';
import './App.css';
import Car from './Components/Car';

const carinfo = {name: "Ford", model: "Mustang"}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car/>
      </header>
    </div>
  );
}

export default App;
