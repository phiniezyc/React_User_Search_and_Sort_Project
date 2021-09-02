import React from "react";

const UserCardStyle = {
  border: "2px solid white",
  padding: "10px",
  minHeight: "300px",
  margin: "20px",
  backgroundColor: "lightgray"
};

const InfoDisplayDiv = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "spaceAround"
};

const inputStyle = {
  display: "block",
  margin: "10px"
};

const EditViewCard = (props) => {
  // Receives props from parent UserCard Component
  return (
    <article style={UserCardStyle} key={props.individualUser.login.uuid}>
      <div style={InfoDisplayDiv}>
        <form onSubmit={props.formSubmitHandler}>
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.name.first}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedFirstNameInputValue", event)
            }
          />
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.name.last}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedLastNameInputValue", event)
            }
          />
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.email}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedEmailInputValue", event)
            }
          />
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.phone}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedPhoneInputValue", event)
            }
          />
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.location.city}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedCityInputValue", event)
            }
          />
          <input
            style={inputStyle}
            placeholder={`${props.individualUser.location.state}`}
            onChange={(event) =>
              props.inputChangeHandler("updatedStateInputValue", event)
            }
          />
          <input type="submit" />
        </form>
      </div>
    </article>
  );
};

export default EditViewCard;
