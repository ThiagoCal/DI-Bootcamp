// import logo from './logo.svg';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Counter from './Components/Counter';
// import {Routes, Route, Link} from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import CounterHook from './Components/CounterHook';
// import Parent from './Parent';
// import Child from './Child';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <CounterHook/>
      </ErrorBoundary>
      {/* // <Parent auth="admin">
      //   <Child/>
      // </Parent> */}
    </div>
  );
}

export default App;
