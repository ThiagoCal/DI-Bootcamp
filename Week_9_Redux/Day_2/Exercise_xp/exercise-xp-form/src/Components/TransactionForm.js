import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { inputProp } from '../../Redux/transactionActions'
// import { inputForm } from '../../Redux/transactionActions'
import './transactionForm.css'
import { insertData } from '../Redux/transactionActions'
import { handleUpdate } from '../Redux/transactionActions'
import TransactionList from './TransactionList'

class TransactionForm extends Component {
  constructor(){
    super()
    this.state = {
      accountNumber: '',
      FSC: '',
      name: '',
      amount: ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    if(this.props.currentIndex === -1){
      this.props.fillInput(this.state)
      // console.log('handleSubmit', this.state)
    }
    else{
      this.props.handleUpdate(this.state)
    }
    this.setState({
      accountNumber: '',
      FSC: '',
      name: '',
      amount: ''
    })
  }

  handleInputChange = (e) =>{
    const value =  e.target.value
    this.setState({ [e.target.name] : value })
    // console.log('handleInputChange', this.state)
  }

  handleEdit = (e) =>{
    this.state.map((element, index) =>
      console.log(index)
      )
  }

  componentDidUpdate =  (prevProps, prevState) =>{
    if(prevProps.currentIndex !== this.props.currentIndex && this.props.currentIndex !== -1){
      const trx = this.props.list[this.props.currentIndex]
      this.setState({
        accountNumber: trx.accountNumber || '',
        FSC: trx.FSC || '',
        name: trx.name || '',
        amount: trx.amount || ''
      })
    }
  }

  render() {
    return (
      <>
        <div>TransactionForm</div>
        <form className='formTransaction' onSubmit={this.handleSubmit}>
          <input value={this.state.accountNumber} type="text" name="accountNumber" placeholder="accountNumber" id="accountNumber"onChange={this.handleInputChange}></input>
          <input value={this.state.FSC} type="text" name="FSC" placeholder="FSC" id="FSC" onChange={this.handleInputChange}></input>
          <input value={this.state.name} type="text" name="name" placeholder="name" id="name" onChange={this.handleInputChange}></input>
          <input value={this.state.amount} type="text" name="amount" placeholder="amount" id="amount" onChange={this.handleInputChange}></input>
          <input type="submit" value="Submit"></input>
        </form>

        <div>
          <TransactionList/>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) =>{
  // console.log(state)
  return {
    currentIndex : state.currentIndex,
    list: state.list
    // handleSubmit: state.form
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fillInput: (e) => dispatch(insertData(e)),
    handleUpdate: (e) => dispatch(handleUpdate(e))
    // fillForm: (e) => dispatch(inputForm(e.target.value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)
