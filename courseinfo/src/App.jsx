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
      <Part part={parts[0].part} exercises={parts[0].exercises} />
      <Part part={parts[1].part} exercises={parts[1].exercises} />
      <Part part={parts[2].part} exercises={parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  console.log("Entered the Total component!");

  const nums = props.nums;
  let sum = 0;
  for (let i in nums) {
    sum += nums[i];
  }

  return <p>Number of exercises {sum}</p>;
};

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        parts={[
          { part: part1, exercises: exercises1 },
          { part: part2, exercises: exercises2 },
          { part: part3, exercises: exercises3 },
        ]}
      />
      <Total nums={[exercises1, exercises2, exercises3]} />
    </div>
  );
}

export default App;
