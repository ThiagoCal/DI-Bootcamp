import logo from './logo.svg';
import './App.css';
import Products from './Components/Products'
import Product from './Components/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}></Route>
          <Route path='/:id' element={<Product/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
