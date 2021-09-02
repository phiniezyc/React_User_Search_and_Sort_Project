import React from "react";

const titleStyle = {
  color: "lightgray",
  fontWeight: "bold",
  fontSize: "5vw"
};

const Header = () => {
  return (
    <header>
      <h1 style={titleStyle}> User Search And Sort </h1>
    </header>
  );
};

export default Header;
