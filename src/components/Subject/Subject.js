import React from "react";
import "./Subject.css";

const Subject = (props) => {
  const { handleAddToDashboard } = props;
  const { img, name, description, duration } = props.subject;
  return (
    <div className="subject">
      <img src={img} alt=""></img>
      <div className="subject-info">
        <p className="subject-name">{name}</p>
        <p>{description}</p>
        <p>Time required : {duration} min</p>
      </div>
      <button
        onClick={() => handleAddToDashboard(duration)}
        className="btn-dashboard"
      >
        <p className="btn-text">Add to list</p>
      </button>
    </div>
  );
};

export default Subject;
