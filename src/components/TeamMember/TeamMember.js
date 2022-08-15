import React from "react";
import "./TeamMember.css";

const TeamMember = ({props}) => {
  return (
    <div className="Membercontainer">
      <img
        src={props.image}
        alt="image"
      />
      <div className="Mempos">
        <h4>{props.name}</h4>
        <p>{props.post}</p>
      </div>

      <h5>{props.rating}</h5>
    </div>
  );
};

export default TeamMember;
