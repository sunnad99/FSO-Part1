import { useState } from "react";

const Button = ({ text, handleClick }) => {
  console.log("Entered button component with:", text);

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

const StatisticLine = ({ name, value }) => {
  console.log("Entered a single statistic component: ", name);

  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  console.log("Entered Statistics Component!");

  // Assigning the common header here
  const heading = <h1>statistics</h1>;

  if (good === 0 && neutral === 0 && bad === 0)
    return (
      <>
        {heading}
        <p>No feedback given</p>
      </>
    );

  const all = good + neutral + bad;
  const average = (good - bad) / all || 0; // Ensures average remains 0 if not divisible
  const positivePercentage = (good / all || 0) * 100 + " %"; // Ensures positive remains 0 if not divisible

  return (
    <>
      {heading}

      <table>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={all} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={positivePercentage} />
      </table>
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
