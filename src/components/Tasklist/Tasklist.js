import React, { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Subject from "../Subject/Subject";
import "./Tasklist.css";

const Tasklist = () => {
  const [subjects, setSubjects] = useState([]);
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const handleAddToDashboard = (selectedSubject) => {
    let newDashboard = [selectedSubject];
    setDashboard(newDashboard);
  };

  return (
    <div className="task-container">
      <div>
        <h1 className="title">Manage your time and get the best result.</h1>
        <p className="title">This is the best website for time management.</p>
        <div className="subjects-container">
          {subjects.map((subject) => (
            <Subject
              key={subject.id}
              subject={subject}
              handleAddToDashboard={handleAddToDashboard}
            ></Subject>
          ))}
        </div>
      </div>
      <div className="dashboard-container">
        <Dashboard dashboard={dashboard}></Dashboard>
      </div>
    </div>
  );
};

export default Tasklist;
