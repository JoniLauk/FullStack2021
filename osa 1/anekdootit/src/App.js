import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const ranNum = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const handleVoteClick = () => {
    const vote = [...votes];
    vote[selected] += 1;
    setVotes(vote);
  };

  const mostVotes = () => {
    let max = 0;
    let indexMax = 0;
    votes.forEach((item, index) => {
      if (item > max) {
        max = item;
        indexMax = index;
      }
    });
    return indexMax;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br></br>
      <Button handleClick={handleVoteClick} text="vote" />
      <Button handleClick={() => setSelected(ranNum())} text="next" />
      <h1>Anecdote with most votes</h1>
      <>
        <p>{anecdotes[mostVotes()]}</p>
        <p>has {votes[mostVotes()]} votes</p>
      </>
    </div>
  );
};

export default App;
