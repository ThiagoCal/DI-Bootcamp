import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
import Counter from './Component.js/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
    </div>
  );
}

export default App;
