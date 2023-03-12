import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import  MovieList  from './Components/MovieList';
import { createStore } from 'redux'
import reducerO from './Redux/Reducer/reducer'

const store = createStore(reducerO)


function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <header className="App-header">
       <MovieList/>
      </header>
    </div>
  );
}

export default App;
