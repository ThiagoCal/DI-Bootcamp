import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
import Child from './Components/Child';
import { changePropOne } from './Redux/action';


class App extends Component {
  constructor(){
    super()
    this.state = {
      property_one: 'text one'
    }
  }

  changeState = (e) =>{
    this.setState({property_one: e.target.value}) 
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Redux Example</h2>
          <input type="text" placeholder='new input' onChange={this.changeProper}></input>
          <p>{this.state.property_one} </p>
          <input type="text" placeholder='second input' onChange={this.props.changePropA}></input>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <Child prop_one={this.state.property_one}/>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    a: state.property_one,
    b: state.property_two
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    changePropA: (e) => dispatch(changePropOne(e.target.value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
