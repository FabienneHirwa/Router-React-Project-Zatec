import React, { Component } from "react";
import { connect } from "react-redux";
import './index.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {open:false,value:""};
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen(e) {
    this.setState({ open: true});
  }
  handleClose(e) {
    this.setState({ open: false});
  }
  render() {
    const { users } = this.props;
    return (
      <div className="attendeeList">
        <h2>Confirmation List</h2>
        {users.map((user) => (
          <>
          {
            user.confirm === "true" ? 
            <div key={user.id} className="attending">
              <div className="card w-100">
                <Dialog open={this.state.open} maxWidth={"lg"} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                  <div style={{padding:"60px"}}>
                    <div className="title">
                      <h2 ><strong>{this.state.value.name}</strong> </h2>
                    </div>
                    <p><strong>Surname: </strong>{this.state.value.surname}</p>
                    <p><strong>Tel: </strong>{this.state.value.telephone}</p>
                    <p><strong>Email: </strong>{this.state.value.email} </p>
                    <button className="btn btn-secondary" onClick={() => {this.props.dispatch({type: "DELETE_USER",id: this.state.value.id}) 
                    this.handleClose()}}> Delete</button>
                    <button onClick={this.handleClose} className="btn btn-secondary">Close</button>
                    </div>
                </Dialog>
              <div className="card-body">
                <h5 className="card-title">{user.name} <i className='fas fa-check'></i> </h5>
                <p className="card-text">Attending Zatec Training!</p>
                <a onClick={(()=>{this.setState({value:user}) 
                this.handleClickOpen()})}  className="btn btn-primary">Details</a>
              </div>
            </div>
          </div> : null
          }
           {
           user.confirm === "false" ? 
           <div key={user.id} className="notAttending">
             <div className="card w-100">
               <Dialog open={this.state.open} maxWidth={"lg"} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                 
             <div style={{padding:"60px"}}>
            <div className="title">
              <h2><strong>{this.state.value.name}</strong> </h2>
            </div>
            <p><strong>Surname: </strong>{this.state.value.surname}</p>
            <p><strong>Tel: </strong>{this.state.value.telephone}</p>
            <p><strong>Email: </strong>{this.state.value.email} </p>
            <button className="btn btn-secondary" onClick={() => {this.props.dispatch({type: "DELETE_USER",id: this.state.value.id})
             this.handleClose()}}> Delete</button>
            <button onClick={this.handleClose} className="btn btn-secondary" >Close</button>
            </div>
            </Dialog>
            <div className="card-body">
            <h5 className="card-title">{user.name} <i className='fas fa-times'></i></h5>
            <p className="card-text">Not Attending Zatec Training!</p>
            <a onClick={(()=>{this.setState({value:user}) 
            this.handleClickOpen()})}  className="btn btn-primary" >Details</a>
            </div>
          </div>
          </div> : null
          }
          </>
         
        ))}
      </div>
    );
    
  }
  
}

const mapStateToProps = (state) => {
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Home);
