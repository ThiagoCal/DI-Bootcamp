import React from 'react'
// import { connect } from 'react-redux'
import { handleDelete } from '../Redux/transactionActions'
// import { handleUpdate } from '../Redux/transactionActions'
import { updateIndex } from '../Redux/transactionActions'

import { useSelector, useDispatch } from 'react-redux'

const TransactionList = (props) => {
  const list = useSelector(state=> state.list)
  // const currentI = useSelector(state=> state.currentIndex)
  const dispatch = useDispatch()
  return (
    <>
      <div>TransactionList</div>
      <table>
        <tbody>
          <tr>
          <th>accountNumber</th>
          <th>FSC</th>
          <th>name</th> 
          <th>accountNumber</th>
          </tr>
          {
            // props.list !== null ?
            // props.list.map((item, index) => {
              list !== null ?
              list.map((item, index) => {
              return(
                <tr key={index}>
                  <td>
                    {item.accountNumber}
                  </td>
                  <td>
                    {item.FSC}
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>
                    {item.amount}
                  </td>
                  {/* <button type="button" onClick={()=>props.deleteTxc(index)}>Delete</button>
                  <button type="button" onClick={()=>props.editTxc(index)}>Edit</button> */}
                  <button type="button" onClick={()=>dispatch(handleDelete(index))}>Delete</button>
                  <button type="button" onClick={()=>dispatch(updateIndex(index))}>Edit</button>
                  {/* <button type="button" onClick={(e)=>deleteTransaction(e,{index})}>Delete</button> */}
                </tr>
              )
            })
            :
            <></>
          }
          </tbody>
      </table>
    </>
  )
}


// const mapStateToProps = (state) =>{
//   return{
//     list: state.list,
//     currentIndex: state.currentIndex
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     deleteTxc : (txc) => dispatch(handleDelete(txc)),
//     editTxc : (txc) => dispatch(updateIndex(txc))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TransactionList)
export default TransactionList