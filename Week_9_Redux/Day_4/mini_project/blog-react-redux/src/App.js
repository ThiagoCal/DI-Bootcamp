import logo from './logo.svg';
import './App.css';
import { Link, useParams } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Post from './Components/Post';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Home/></>}></Route>
          <Route path='/about' element={<><Navbar/><About/></>}></Route>
          <Route path="/contact" element={<><Navbar/><Contact/></>}></Route>
          <Route path='/:id' element={<><Navbar/><Post/></>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
