import React from 'react';
// import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// import Home from './Components/Home';
// import Profile from './Components/Profile';
// import Shop from './Components/Shop';
// import ErrorBoundary from './Components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostList from './Components/PostList';
import Example1 from './Components/Example1';
import Example2 from './Components/Example2';

function App() {
  return (
    //----- exercise 1
    // <Router>
    //   <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/profile">Profile</NavLink>
    //     <NavLink to="/shop">Shop</NavLink>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={ <ErrorBoundary><Home /></ErrorBoundary>} />
    //     <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
    //     <Route path="/shop" element={<ErrorBoundary><Shop /></ErrorBoundary>} />
    //   </Routes>
    // </Router>
    //--- end of exercise 1
    //---- exercise 2
    // <>
    //   <PostList/>
    // </>
    //---- end of exercise 2
    <>
      <Example1 />
      <Example2 />
    </>
  );
}

export default App;