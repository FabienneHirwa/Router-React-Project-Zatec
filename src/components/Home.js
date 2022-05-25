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
            <h5 className="card-title">{user.name} <i class='fas fa-check'></i> </h5>
            <p className="card-text">Attending Zatec Training!</p>
            <Link to={{pathname: '/user',state: user}}className="btn btn-primary">Details</Link>
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
              <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">{user.name} <i class='fas fa-times'></i></h5>
            <p class="card-text">Not Attending Zatec Training!</p>
            <a href="#" class="btn btn-primary">Details</a>
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
