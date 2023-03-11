import React, { Component } from 'react'
import example from '../Data2'

export default class Example1 extends Component {
  constructor(){
    super()
    let data = JSON.parse(JSON.stringify(example))
    this.state = {
      data: data
    }
  }
  render() {
    let example1 = this.state.data
    return (
      <>
        <div>Example1</div>
        {
          example1.SocialMedias.map(item => {
            return(
              <ul>
                <li>{item}</li>
              </ul>
            )
          })
        }
      </>
    )
  }
}
