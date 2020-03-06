import React from "react";

function Filter({ Name, Value, onFilterChange }) {
  const handleChange = (event) => {
    onFilterChange(event);
  }

  const body = Value.map(val => <div className="checkbox">
    <label>
      <input type="checkbox"
        onChange={handleChange}
        value={val.Name} />
      {val.Name}
    </label>
  </div>);

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className="fa fa-filter" 
            style={{ 'marginRight': '10px' }} 
            aria-hidden="true"></i>
          {Name}
        </h3>
      </div>
      <div className="panel-body">{body}</div>
    </div>
  );
}

export default Filter;
