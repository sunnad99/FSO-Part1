import { useState } from "react";

const Button = ({ text, handleClick }) => {
  console.log("Enter button component: ", text);

  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

const AnecdoteOfTheDay = ({
  anecdote,
  votes,
  handleAnecdoteVotes,
  handleAnecdoteText,
}) => {
  console.log("Entered AnecdoteOfTheDay with:", anecdote, votes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
      <Button text="vote" handleClick={handleAnecdoteVotes} />
      <Button text="next anecdote" handleClick={handleAnecdoteText} />
    </>
  );
};

const AnecdoteMostVotes = ({
  anecdoteOfTheDay,
  maxAnecdoteIndex,
  maxAnecdoteVotes,
}) => {
  console.log(
    "Entered AnecdoteOfTheDay with:",
    anecdoteOfTheDay,
    maxAnecdoteIndex,
    maxAnecdoteVotes
  );

  const commonHeader = <h1>Anecdote with most votes</h1>;

  // If there are no votes, render "No anecdotes to show" with emphasis using <strong>
  if (!maxAnecdoteIndex) {
    return (
      <>
        {commonHeader}
        <p>
          <strong>{anecdoteOfTheDay}</strong>
        </p>
      </>
    );
  }

  return (
    <>
      {commonHeader}
      <p>{anecdoteOfTheDay}</p>
      <p>has {maxAnecdoteVotes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const handleAnecdoteText = () => {
    const anecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    console.log("Produced an index of: ", anecdoteIndex);
    setSelected(anecdoteIndex);
  };

  const handleAnecdoteVotes = () => {
    const prevVotes = { ...votes };

    if (selected in prevVotes) {
      prevVotes[selected] += 1;
    } else {
      prevVotes[selected] = 1;
    }

    setVotes(prevVotes);
  };

  const selectedAnnecdote = anecdotes[selected];
  const selectedVotes = votes[selected] || 0;
  let { anecdoteOfTheDay, maxAnecdoteIndex, maxAnecdoteVotes } =
    extractAnecdoteWithMostVotes(votes, anecdotes);

  return (
    <div>
      <AnecdoteOfTheDay
        anecdote={selectedAnnecdote}
        votes={selectedVotes}
        handleAnecdoteText={handleAnecdoteText}
        handleAnecdoteVotes={handleAnecdoteVotes}
      />

      <AnecdoteMostVotes
        anecdoteOfTheDay={anecdoteOfTheDay}
        maxAnecdoteIndex={maxAnecdoteIndex}
        maxAnecdoteVotes={maxAnecdoteVotes}
      />
    </div>
  );
};

export default App;
function extractAnecdoteWithMostVotes(votes, anecdotes) {
  let anecdoteOfTheDay = "No anecdotes to show";
  let maxAnecdoteIndex = null;
  let maxAnecdoteVotes = null;

  // If there are no votes, return the default values
  if (Object.keys(votes).length !== 0) {
    let currentMax = -1;
    for (let key in votes) {
      let currentVotes = votes[key];
      if (currentVotes > currentMax) {
        currentMax = currentVotes;
        maxAnecdoteVotes = currentVotes;
        maxAnecdoteIndex = key;
      }
    }

    anecdoteOfTheDay = anecdotes[maxAnecdoteIndex];
  }

  return { anecdoteOfTheDay, maxAnecdoteIndex, maxAnecdoteVotes };
}
