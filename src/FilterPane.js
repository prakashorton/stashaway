import React, { useState } from "react";
import Filter from "./Filter";

function FilterPane({ data, onFilterUpdated }) {
  const [filters, setFilters] = useState({});

  const onFilterChange = (event, filterKey) => {
    if (event && event.target && event.target.value) {
      if (event.target.checked) {
        if (Array.isArray(filters[filterKey])) {
          const isValueAvailable = filters[filterKey].find(fi => fi == event.target.value);
          if (!isValueAvailable) {
            filters[filterKey].push(event.target.value);
          }
        } else {
          filters[filterKey] = [event.target.value];
        }
      } else {
        if (Array.isArray(filters[filterKey])) {
          const isValueAvailable = filters[filterKey].find(fi => fi == event.target.value);
          if (isValueAvailable) {
            filters[filterKey] = filters[filterKey].filter(fi => fi != event.target.value);
          }
        } else {
          filters[filterKey] = [];
        }
      }
      setFilters(filters);
      onFilterUpdated(filters);
    }
  }

  const availableFilters = Object.keys(data).map(da => <Filter
    Name={da}
    Value={data[da]}
    onFilterChange={(event) => {
      onFilterChange(event, da)
    }}
  />);

  return (
    <React.Fragment>
      {availableFilters}
    </React.Fragment>
  );
}

export default FilterPane;
