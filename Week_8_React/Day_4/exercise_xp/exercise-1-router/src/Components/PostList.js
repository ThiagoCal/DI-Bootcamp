import React, { Component } from 'react'
import data from '../Data'
export default class PostList extends Component {
  constructor(){
    super()
    let dataObj = JSON.parse(JSON.stringify(data))
    this.state = {
      data: dataObj
    }
  }
  render() {
    let dataObj = this.state.data
    return (
      <>
        <div>PostList</div>
        {
          dataObj.map((item) => {
            return(
              <>
              <h3>{item.title}</h3>
              <span>{item.content}</span>
              </>
            )
          })
        }
      </>
    )
  }
}
