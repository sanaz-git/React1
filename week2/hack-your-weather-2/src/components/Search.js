import React from "react";

const Search = ({ FetchData }) => {
  return (
    <div>
      <div>
        <button className="btn" onClick={FetchData}></button>
      </div>
    </div>
  );
};

export default Search;