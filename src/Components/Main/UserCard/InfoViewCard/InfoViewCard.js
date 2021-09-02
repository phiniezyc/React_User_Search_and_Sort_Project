import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

/*
  To stay consistent used inline styles in same file as component.
  As mentioned in other comments, would use alternate strategy in 
  larger app. Specifically would import these styles (at min)
*/
const UserCardStyle = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  border: "10px solid lightgray",
  padding: "0px",
  margin: "20px",
  height: "250px",
  width: "200px",
  backgroundColor: "white",
  color: "white",
  overflowWrap: "break-word"
};

const iconStyle = {
  float: "left",
  margin: "10px -29px 0px 10px"
};

const nameDivStyle = {
  backgroundColor: "blue",
  minHeight: "70px",
  margin: "0px",
  padding: "0px",
  color: "lightgray"
};

const imageDivStyle = {
  position: "absolute",
  top: "40px",
  left: "60px",
  marginTop: "10px"
};

const imageStyle = {
  border: "3px solid white",
  borderRadius: "50%"
};

const infoDivStyle = {
  marginTop: "50px",
  color: "gray",
  fontFamily: "monspace, Courier new",
  fontSize: ".85em",
  overflowWrap: "break-word"
};

const InfoViewCard = (props) => {
  return (
    <article style={UserCardStyle} key={props.uniqueKey}>
      <div style={nameDivStyle}>
        <FontAwesomeIcon
          style={iconStyle}
          icon={faUserEdit}
          onClick={props.editButtonClickHandler}
        />
        <h3>
          {`${props.individualUser.name.first} ${props.individualUser.name.last}`}{" "}
        </h3>
      </div>

      <div style={imageDivStyle}>
        <img
          style={imageStyle}
          src={props.individualUser.picture.medium}
          alt="user"
        />
      </div>
      <div style={infoDivStyle}>
        <h4> {`${props.individualUser.email}`} </h4>
        <h4> {`${props.individualUser.phone}`} </h4>
        <h4>
          {`${props.individualUser.location.city}, ${props.individualUser.location.state}`}
        </h4>
      </div>
    </article>
  );
};

export default InfoViewCard;
