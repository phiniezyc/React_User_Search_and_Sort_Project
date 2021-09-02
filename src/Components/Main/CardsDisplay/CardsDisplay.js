import React from "react";
import UserCard from "../UserCard/UserCard";

/*
For a full ongoing project would have seperate style sheet (or alt system)
However for this project, since css is limited it makes sense to inline
*/
const CardsDisplayStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "lightblue",
  border: "10px solid lightgray",
  borderRadius: "20px"
};

const CardsDisplay = (props) => {
  const users = props.users
    ? [...props.users].map((user) => {
        return <UserCard userInfo={user} key={user.login.uuid} />;
      })
    : "Loading";

  return <div style={CardsDisplayStyle}> {users} </div>;
};

export default CardsDisplay;
