import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Questions from "./components/Questions/Questions";
import Tasklist from "./components/Tasklist/Tasklist";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Tasklist></Tasklist>
      <Questions></Questions>
    </div>
  );
}

export default App;
