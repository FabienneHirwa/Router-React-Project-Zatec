import React, { Component } from "react";
import { connect } from "react-redux";

class EditUser extends Component {
  handleUserEdit = (event) => {
    event.preventDefault();
    const name = this.getName.value;
    const surname = this.getSurname.value;
    const telephone = this.getTelephone.value;
    const  email = this.getEmail.value;


    const editUser = {
      name,
      surname,
      telephone,
      email
    };
    
    this.props.dispatch({
      type: "UPDATE_USER",
      id: this.props.user.id,
      payload: editUser
    });
  };
  render() {
    const { user } = this.props;

    return (
      <div>
        <form onSubmit={this.handleUserEdit} className="attendanceForm2">
          <input ref={(input) => {this.getName = input;}} required type="text" defaultValue={user.name} placeholder="Enter  full name"/>
          <br />
          <br />
          <input ref={(input) => {this.getSurname = input;}} required type="text" defaultValue={user.surname} placeholder="Enter surname"/>
          <br />
          <br />
          <input ref={(input) => {this.getTelephone = input;}}required type="text"defaultValue={user.telephone} placeholder="Enter user telepone number"/>
          <br /><br/>
          <input ref={(input) => {this.getEmail = input;}} required type="text" defaultValue={user.email} placeholder="Enter email"/>
          <br />
          <br />
          <button className="editButton">Edit </button>
        </form>
        
      </div>
    );
  }
}

export default connect()(EditUser);
