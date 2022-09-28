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
    // const exists = dashboard.find(
    //   (subject) => subject.id === selectedSubject.id
    // );
    // if (!exists) {
    //   selectedSubject.quantity = 1;
    //   newDashboard = [...dashboard, selectedSubject];
    // } else {
    //   const rest = dashboard.filter(
    //     (subject) => subject.id !== selectedSubject.id
    //   );
    //   exists.quantity = exists.quantity + 1;
    //   newDashboard = [...rest, exists];
    // }

    setDashboard(newDashboard);
  };

  return (
    <div className="task-container">
      <div className="subjects-container">
        {subjects.map((subject) => (
          <Subject
            key={subject.id}
            subject={subject}
            handleAddToDashboard={handleAddToDashboard}
          ></Subject>
        ))}
      </div>
      <div className="dashboard-container">
        <Dashboard dashboard={dashboard}></Dashboard>
      </div>
    </div>
  );
};

export default Tasklist;
