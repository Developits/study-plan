import React, { useState } from "react";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = ({ time }) => {
  const [breakTime, setBreaktime] = useState(0);
  const allTime = time.reduce((p, c) => p + c, 0);

  const notify = () => {
    toast.info("Your activities is completed.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showBreaktime = (e) => {
    const t = e.currentTarget.value;
    setBreaktime(t);
  };
  return (
    <div className="dashboard">
      <div className="flexible">
        <div>
          <img
            src="https://uploads.dailydot.com/2021/03/andrew-wyrich.png?auto=compress&fit=fit&fm=jpg&h=96&w=96"
            alt=""
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
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
        <button value="10" onClick={showBreaktime}>
          10 min
        </button>
        <button value="15" onClick={showBreaktime}>
          15 min
        </button>
        <button value="20" onClick={showBreaktime}>
          20 min
        </button>
        <button value="25" onClick={showBreaktime}>
          25 min
        </button>
        <button value="30" onClick={showBreaktime}>
          30 min
        </button>
      </div>
      <div>
        <div>
          <p>Exercise time : {allTime} min</p>
        </div>
        <div>
          <p>Break time : {breakTime} min </p>
        </div>
      </div>
      <button onClick={notify}>Activity Completed</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Dashboard;
