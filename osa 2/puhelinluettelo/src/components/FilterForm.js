import React from "react";

const FilterForm = (props) => {
  return (
    <div>
      <b>Filter by name </b>
      <input
        id="filter"
        value={props.filter}
        onChange={(event) => props.setFilter(event.target.value)}
      />
    </div>
  );
};

export default FilterForm;
