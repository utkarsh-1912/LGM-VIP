import React from "react";

function userBox(props) {
  var Image = props.image;
  if (Image === "") {
    Image =
      "https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png";
  }
  console.log(props.skills);
  return (
    <div className="userContent">
      <div className="boxItem left">
        <img src={Image} alt={props.name + "'s image"} />
      </div>
      <div className="boxItem right">
        <h4 className="item">{props.name}</h4>
        <p className="item">{props.gender}</p>
        <a href={"mailto:" + props.email}>
          <p className="item">{props.email}</p>
        </a>
        <a href={"https://" + props.website}>
          <p className="item">{props.website}</p>
        </a>
        <p className="item skill">
          <h5>Skill : </h5>
          {props.skills}
        </p>
      </div>
    </div>
  );
}

export default userBox;
