import React from "react";

const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.persons
          .filter(
            (person) =>
              person.name.toLowerCase().includes(props.filter.toLowerCase()) ||
              props.filter === ""
          )
          .map((person) => (
            <li key={person.name}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Persons;
