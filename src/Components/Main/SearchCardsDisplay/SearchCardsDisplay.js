import React from "react";

const searchBarStyle = {
  minWidth: "25%",
  margin: "10px",
  backgroundColor: "lightblue",
  border: "5px solid lightgray",
  borderRadius: "20px",
  color: "gray"
};

const sortButtonStyle = {
  margin: "10px",
  backgroundColor: "lightblue",
  border: "5px solid lightgray",
  borderRadius: "50px",
  color: "gray"
};

const SearchCardsDisplay = (props) => {
  return (
    /*
      Recieves props to keep state in parent level for multiple components to use.
      Acceptable in small app but suggest Redux or other state management library 
      to avoid prop drilling.
    */
    <>
      <form>
        <input
          style={searchBarStyle}
          placeholder="Search..."
          value={props.inputValue}
          onChange={props.onSearchChange}
        />
      </form>
      <button style={sortButtonStyle} onClick={props.sortClickHandler}>
        Sort
      </button>
    </>
  );
};

export default SearchCardsDisplay;
