import React, { Component } from 'react'
import example from '../Data2'

export default class Example2 extends Component {
  constructor(){
    super()
    let data = JSON.parse(JSON.stringify(example))
    this.state = {
      data: data
    }
  }
  render() {
    let example2 = this.state.data.Skills.map(item => item)
    console.log(example2)
    let element = example2.map(item => item.Area)

    return (
      <>
      <h3>{element}</h3>
      <span>
        {example.Skills.map((skill) => (
          <h3>{skill.Area}</h3>
          skill.SkillSet.map((skillItem, j) => (
            <span key={j}>{skillItem.Name} </span>
          ))
        ))}
      </span>
    </>
    )}
}
