import React from "react";

function SearchBar({ Name, Value, onSearchUpdated }) {
    const searchChange = (event) => {
        onSearchUpdated(event);
    }

    return (
        <div
            style={{ padding: "15px", marginTop: "65px" }}>
            <input
                type="text" onChange={searchChange}
                style={{ 'width': '100%' }}
                className="form-control"
                placeholder="Search for..."
            />
        </div>
    );
};

export default SearchBar;