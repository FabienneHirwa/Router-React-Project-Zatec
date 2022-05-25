import React, { Component } from "react";
import { connect } from "react-redux";
import './index.css';

 class AddAttendee extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
    
        let name = this.getName.value;
        let surname = this.getSurname.value;
        let telephone = this.getTelephone.value;
        let  email = this.getEmail.value;
        let confirm = this.getConfirm.value
        
    
        let newUser = {
          id: Math.floor(Math.random() * 1000) + 1,
          name,
          surname,
          telephone,
          email,
          confirm
        };
    
        this.props.dispatch({
          type: "ADD_USER",
          payload: newUser
        });
    
        this.getName.value = "";
        this.getSurname.value = "";
        this.getEmail.value = "";
        this.getTelephone.value = "";
      };
      render() {
    return(
        
        <div>
            
            <div className="form">
            <h2>Form for adding Trainee</h2><br/>
            <form  onSubmit={this.handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label >Full name</label>
      <input ref={(input) => {this.getName = input;}}  type="text" className="form-control"  placeholder="Full Name..." required/>
    </div><br/>
    <div className="form-group col-md-6">
      <label>Surname</label>
      <input ref={(input) => {this.getSurname = input;}} type="text" className="form-control"  placeholder="Surname..." required/>
    </div><br/>
    <div className="form-group col-md-6">
      <label>Telephone</label>
      <input ref={(input) => {this.getTelephone = input;}} type="tel" className="form-control"  placeholder="Telephone..." required/>
    </div><br/>
    <div className="form-group col-md-6">
      <label>Email</label>
      <input ref={(input) => {this.getEmail = input;}} type="email" className="form-control"  placeholder="Email..." required/>
    </div><br/>
  </div>
  <div className="form-row">
  <label>Confirming</label>
  <div className="form-check">
  <input onClick={(input) => {this.getConfirm = input.target;}} name="Attending"  type="radio" value="true"/>
  <label className="form-check-label" >
    Attending
  </label>
</div>
<div className="form-check">
  <input onClick={(input) => {this.getConfirm = input.target;}}  type="radio" name="Attending"   value="false"/>
  <label className="form-check-label" >
    Not Attending
  </label>
</div>
  </div>
  <br/>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
        </div>
    )
}
 }

export default connect()(AddAttendee);