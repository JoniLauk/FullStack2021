import React from "react";

const Course = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const totalExercises = props.parts.map((part) => {
    return part.exercises;
  });

  const total = totalExercises.reduce(reducer);

  return (
    <div>
      <Header course={props.name} />
      <Content parts={props.parts} />
      <Total total={total} />
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <div>
      <b>Total number of exercises {props.total}</b>
    </div>
  );
};

export default Course;
