const SearchBox = (props) =>{
  return(
    <input type="text" onChange={(e)=>props.search(e)}></input>
  )
}

export default SearchBox