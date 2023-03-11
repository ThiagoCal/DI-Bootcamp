import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = {
      hasError : false
    }
  }

  componentDidCatch(error, errorInfo){
    console.log(error, errorInfo);
    this.setState({hasError: error})
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
