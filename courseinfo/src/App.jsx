import { useState } from "react";

const Header = (props) => {
  console.log("Entered the header!");

  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  console.log("Entered a part");

  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log("Entered the content!");

  const parts = props.parts;
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  console.log("Entered the Total component!");

  const parts = props.parts;
  let sum = 0;
  for (let i in parts) {
    sum += parts[i].exercises;
  }

  return <p>Number of exercises {sum}</p>;
};

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
