import {React, Component} from "react";

class UserC extends Component{
  render(){
    return(
      <div style={{diplay:'inline-block', padding:'10px', margin:'20px', border:'1px solid black' }}>
        <h4>{this.props.name}</h4>
        <p>{this.props.email}</p>
        <p>{this.props.username}</p>
      </div>
    )
  }
}

export default UserC