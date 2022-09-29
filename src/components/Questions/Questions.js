import React from "react";
import "./Questions.css";

const Questions = () => {
  return (
    <div className="questions-container">
      <header>
        <h1 className="q-header">Some important question about Javascript</h1>
      </header>
      <main>
        <div className="question">
          <h3>Question 01: How does react work?</h3>
          <p>
            <strong>Ans</strong>: A virtual dom is a lightweight JavaScript
            object that is a copy of the real dom. What react does under the
            hood? When you program ui changes / events in react, it applies
            changes to virtual dom and then changes real dom for the virtual
            one. To understand why this was invented you would have to read more
            about how browsers handle changes to real dom and traditional
            changes using simple js or jquery. In simple terms each change to
            dom nodes causes browser to rerender, this is synchronized change,
            so if by using js you cause change to multiple nodes each change is
            a rerender and css style recalculation. What react does is an
            aggregation of these changes and then swiping that changes in one go
            instead of 15 for example. This is what causes react.js to preform
            better in heavy changeable user interfaces (for example single page
            applications where sometimes you change almost every node in js)
          </p>
        </div>
        <div className="question">
          <h3>
            Question 02 : What are the differences between props and state ?
          </h3>
          <p>
            <strong>Ans</strong>: The state is an updatable structure that is
            used to contain data or information about the component and can
            change over time. The change in state can happen as a response to
            user action or system event. It is the heart of the react component
            which determines the behavior of the component and how it will
            render. A state must be kept as simple as possible. It represents
            the component's local state or information. It can only be accessed
            or modified inside the component or by the component directly.
          </p>
        </div>
        <div className="question">
          <h3>
            Question 03 : useEffect is used for other purpose than loading data?
          </h3>
          <p>
            <strong>Ans</strong>: 5 use cases of the useEffect ReactJS hook:
            <br />
            1) Running on state change: validating input field.
            <br />
            2) Running on state change: live filtering.
            <br />
            3) Running on state change: trigger animation on new array value.
            <br />
            4) Running on props change: update paragraph list on fetched API
            data update.
            <br />
            5) Running on props change: updating fetched API data to get BTC
            updated price.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Questions;
