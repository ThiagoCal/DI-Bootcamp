import RandomQuotes from './Components/RandomQuotes';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('')
  return (
    <div className="App" style={{backgroundColor: color}}>
        <RandomQuotes setColor={setColor} color={color}/>
    </div>
  );
}

export default App;
