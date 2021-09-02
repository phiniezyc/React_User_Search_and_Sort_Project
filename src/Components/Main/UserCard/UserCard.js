import React, { Component } from "react";
import InfoViewCard from "./InfoViewCard/InfoViewCard";
import EditViewCard from "./EditViewCard/EditViewCard";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      individualUser: this.props.userInfo,
      editMode: false,
      updatedFirstNameInputValue: "",
      updatedLastNameInputValue: "",
      updatedPhoneInputValue: "",
      updatedEmailInputValue: "",
      updatedCityInputValue: "",
      updatedStateInputValue: ""
    };
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }
  /*
    toggles editMode to true or false to determine
    which component rendered 
  */
  editIndividualUserCard = () => {
    this.setState({
      editMode: !this.state.editMode
    });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    /* 
      larger application would make sense to abstract
      and perhaps use switch statement
    */
    const userObj = { ...this.state.individualUser };
    /* 
      determine which properties should be updated
      when form submitted
    */
    if (this.state.updatedFirstNameInputValue.length) {
      userObj.name.first = this.state.updatedFirstNameInputValue;
    }
    if (this.state.updatedLastNameInputValue.length) {
      userObj.name.last = this.state.updatedLastNameInputValue;
    }
    if (this.state.updatedPhoneInputValue.length) {
      userObj.phone = this.state.updatedPhoneInputValue;
    }
    if (this.state.updatedEmailInputValue.length) {
      userObj.email = this.state.updatedEmailInputValue;
    }
    if (this.state.updatedCityInputValue.length) {
      userObj.location.city = this.state.updatedCityInputValue;
    }
    if (this.state.updatedStateInputValue.length) {
      userObj.location.state = this.state.updatedStateInputValue;
    }

    this.setState({
      individualUser: userObj,
      editMode: false
    });
  };

  // Updates state when user enters chars on form
  inputChangeHandler = (statetoUpdate, event) => {
    event.preventDefault();
    this.setState({
      [statetoUpdate]: event.target.value
    });
  };

  // In production should account for null properties
  render() {
    let cardView;
    /*
      cardView = 1 of 2 states.  If editMode is true
      cardView renders EditViewCardCompent. Otherwise,
      cardView renders InfoViewCardComponent.
    */
    if (this.state.editMode) {
      cardView = (
        <>
          <EditViewCard
            individualUser={this.state.individualUser}
            uniqueKey={this.props.userInfo.login.uuid}
            formSubmitHandler={this.formSubmitHandler}
            inputChangeHandler={this.inputChangeHandler}
          />
        </>
      );
    } else {
      cardView = (
        <>
          <InfoViewCard
            individualUser={this.state.individualUser}
            uniqueKey={this.props.userInfo.login.uuid}
            editButtonClickHandler={this.editIndividualUserCard}
          />
        </>
      );
    }
    return <>{cardView}</>;
  }
}

export default UserCard;
