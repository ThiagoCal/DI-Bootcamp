import React, { Component } from 'react'
import quotes from '../Quotes';
import './RandomQuotes.css'


export default class RandomQuotes extends Component {
  constructor(){
    super()
    let arrayQuotes = JSON.parse(JSON.stringify(quotes))
    this.state = {
      quotes: arrayQuotes,
      colors: '',
      quote: '',
    }
    this.new_array = []
  }
  componentDidMount(){
    
    this.setState({quote: this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]})
    let randomStateColor =  `#${Math.floor(Math.random()*16777215).toString(16)}`
    this.props.setColor(randomStateColor)
    console.log(this.state.new_array)
  }

  getRandomColor = () =>{
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`
    this.props.setColor(randomColor)
  }

  getRandomQuote = (e) =>{
    e.preventDefault()
    for(let i = 0; i < this.state.quotes; i++ ){
      if(this.new_array.length > 0 && this.new_array.includes(i)){
        console.log('repeated index')
        this.getRandomQuote()
      }
      else{
        this.new_array.push(i)
      }
    }
    this.getRandomColor()
    console.log(this.new_array)
    this.setState({quote: this.state.quotes[Math.floor(Math.random()*this.state.quotes.length)]})
  }

  render() {
    let randomQuote = this.state.quote
    console.log(this.state.new_array)
    // document.body.style={backgroundColor: this.state.colors}
    return (
      <div className="randomQuotes">
        <div>RandomQuotes</div>
        <div style={{backgroundColor:'white', width: '500px', color:'black', borderRadius:'10px', display: 'flex', flexDirection:'column', alignItems:'flex-end', padding: '1em'}}>   
          <p style={{alignSelf:'center'}}>
            "{randomQuote.quote}"
          </p>
          <p>
            -{randomQuote.author}
          </p>
        <button type='button' className='btn-random' style={{backgroundColor: this.props.color, border: '1px solid grey', borderRadius:'5px'}} onClick={(e)=>this.getRandomQuote(e)}>Get Random</button>
        </div>
      </div>
    )
  }
}
