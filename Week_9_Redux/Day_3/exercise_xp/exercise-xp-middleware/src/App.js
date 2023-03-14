import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import AgeCounter from './Components/AgeCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <AgeCounter/>
      </header>
    </div>
  );
}

export default App;
