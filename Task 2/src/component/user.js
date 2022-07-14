import React from "react";

function UserBox(props) {
  return (
    <div className="userBox">
      <div className="userItem img">
        <img src={props.avatar} alt="" />
      </div>
      <div className="userItem content">
        <div className="text">
          <h3>First Name</h3>
          <p>{props.first_name}</p>
        </div>
        <div className="text">
          <h3>Last Name</h3>
          <p>{props.last_name}</p>
        </div>
        <div className="text">
          <h3>Email</h3>
          <a href={"mailto:" + props.email}>
            <p>{props.email}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserBox;
