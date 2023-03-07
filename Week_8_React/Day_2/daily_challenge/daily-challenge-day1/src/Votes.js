import {React, Component} from 'react'
import './Votes.css'

export default class Votes extends Component {
  constructor(props){
    super(props)
    this.state = {
      languages : [
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
      ]
    }
  }
  upVote = (language) =>{
    this.setState({ votes: language.votes++ })
  }
  render(){
    // let languages = this.state.languages
    return (
      <>
      {
        this.state.languages.map(language => (
          <div className="language-div" id={language.name} key={language.name}>
            <h3>{language.name}</h3>
            <div className="votes-div">
              <p>Votes: {language.votes}</p>
              <button type="button" className="btn-vote"onClick={()=>this.upVote(language)}>Upvote</button>
            </div>
          </div>
        ))
      }
      </>
    )
  }
}