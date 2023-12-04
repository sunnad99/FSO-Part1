import { useState } from "react";

const Button = ({ text, handleClick }) => {
  console.log("Entered button component with:", text);

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

const Statistic = ({ name, value }) => {
  console.log("Entered a single statistic component: ", name);

  return (
    <p>
      {name} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log("Entered Statistics Component!");

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0; // Ensures average remains 0 if not divisible
  const positivePercentage = good / all || 0; // Ensures positive remains 0 if not divisible

  return (
    <>
      <h1>statistics</h1>
      <Statistic name="good" value={good} />
      <Statistic name="neutral" value={neutral} />
      <Statistic name="bad" value={bad} />
      <Statistic name="all" value={all} />
      <Statistic name="average" value={average} />
      <Statistic name="positive" value={positivePercentage} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGood} />
      <Button text="neutral" handleClick={handleNeutral} />
      <Button text="bad" handleClick={handleBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
