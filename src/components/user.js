import React, { Component } from "react";
import { connect } from "react-redux";

class User extends Component {

  render() {
    const { user } = this.props;
    console.log(this.props)
    return (
      <div>
        <div>
        <h6><strong>{user.name}</strong> </h6>
        </div>
        <p><strong>Surname: </strong>{user.surname}</p>
        <p><strong>Tel: </strong>{user.telephone}</p>
        <p><strong>Email: </strong>{user.email} </p>
        <button className="editButton" onClick={() =>this.props.dispatch({type: "EDIT_USER",id: user.id })}> Edit</button>
        <button className="deleteButton" onClick={() => this.props.dispatch({type: "DELETE_USER",id: user.id})}> Delete</button>
        
      </div>
    );
  }
}

export default User;
