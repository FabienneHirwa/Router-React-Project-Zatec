import React, { Component } from "react";
import { connect } from "react-redux";
import User from "./user";
import EditUser from "./EditUser";
import './index.css';
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    const { user } = this.props;
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
          <div className="card-body">
            <h5 className="card-title">{user.name} <i className='fas fa-check'></i> </h5>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
            <p className="card-text">Attending Zatec Training!</p>
            <a onClick={user}  className="btn btn-primary">Details</a>
            </div>
          </div>
            {/* {user.editing ? (
              <EditUser user={user} key={user.id} />
            ) : (
              <User user={user} key={user.id} />
            )} */}
          </div> : null
          }
           {
            user.confirm === "false" ?
            <div key={user.id} className="notAttending">
              <div className="card w-100">
          <div className="card-body">
            <h5 className="card-title">{user.name} <i className='fas fa-times'></i></h5>
            <p className="card-text">Not Attending Zatec Training!</p>
            <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
               
            {/* {user.editing ? (
              <EditUser user={user} key={user.id} />
            ) : (
              <User user={user} key={user.id} />
            )} */}
          </div> : null
          }
          </>
         
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state
  };
};

export default connect(mapStateToProps)(Home);
