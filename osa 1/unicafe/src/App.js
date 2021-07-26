import React, { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <table>
      <StatisticsLine text="good" value={props.good}></StatisticsLine>
      <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
      <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
      <StatisticsLine text="all" value={props.all}></StatisticsLine>
      <StatisticsLine text="average" value={props.average}></StatisticsLine>
      <StatisticsLine
        text="positive"
        value={props.positive + " %"}
      ></StatisticsLine>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = () => {
    return good + bad + neutral;
  };
  const average = () => {
    return (good * 1 + bad * -1) / all();
  };
  const positive = () => {
    return (good / (bad + good + neutral)) * 100;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all()}
        average={average()}
        positive={positive()}
      />
    </div>
  );
};

export default App;
