import React from "react";
import "./Dashboard.css";

let total = 0;

const Dashboard = ({ dashboard }) => {
  for (const subject of dashboard) {
    total = total + subject.duration;
  }

  return (
    <div className="dashboard">
      <div className="flexible">
        <div>
          <img
            src="https://uploads.dailydot.com/2021/03/andrew-wyrich.png?auto=compress&fit=fit&fm=jpg&h=96&w=96"
            alt=""
          />
        </div>
        <div>
          <p>Md.Nahidul Islam</p>
          <p> Brahmanbaria,Bangladesh.</p>
        </div>
      </div>
      <div className="flexible">
        <p>Student</p>
        <p>Age: 19</p>
        <p>class: XII</p>
      </div>
      <h2>Add a break</h2>
      <div className="flexible">
        <button>10 min</button>
        <button>15 min</button>
        <button>20 min</button>
        <button>25 min</button>
        <button>30 min</button>
      </div>
      <div>
        <div>
          <p>Exercise time {total / 2}</p>
        </div>
        <div>
          <p>Break time </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
