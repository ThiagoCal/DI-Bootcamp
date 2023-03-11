import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(){
    super()
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error, errorInfo){
    console.log('error', error)
    console.log(errorInfo)
    this.setState({error: error})
    this.setState({errorInfo: errorInfo})
  }
  render() {
    if(this.state.error){
      return (
        <div>Something went wrong</div>
      )
    }
    return this.props.children
  }
}
