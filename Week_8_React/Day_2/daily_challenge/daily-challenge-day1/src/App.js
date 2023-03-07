import logo from './logo.svg';
import './App.css';
import Votes from './Votes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='pool'>
          <Votes/>
        </div>
      </header>
    </div>
  );
}

export default App;
