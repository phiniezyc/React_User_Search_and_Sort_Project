import React, { Component } from "react";
import CardsDisplay from "../CardsDisplay/CardsDisplay";
import SearchDisplay from "../SearchCardsDisplay/SearchCardsDisplay";

/* Using class because most existing code relies on class component, 
however react hooks is the newer functional way
*/
class UserSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      users: [],
      filteredUsers: [],
      value: "",
      editMode: false
    };
    this.filterResuts = this.filterResults.bind(this);
  }

  componentDidMount() {
    /* Limited returned results to 12,
      increase (or decrease) to adjust num of users
    */
    fetch("https://randomuser.me/api/?nat=us&results=12")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data.results
        });
      })
      .catch((error) => {
        /*
       Would more elegantly handle this error in production app
       Perhaps create an error component to return to user
       */
        this.setState({
          error
        });
        console.error(error.message);
      });
  }

  filterResults = (char, data) => {
    const value = char.trim().toLowerCase();
    const filteredResuts = data.filter((user) => {
      return `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .trim()
        .includes(value);
    });
    this.setState({
      filteredUsers: [...filteredResuts]
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value.trim() });
    this.filterResuts(event.target.value, this.state.users);
  };

  sortClickHandler = (event) => {
    event.preventDefault();
    let filteredUsersCopy = [...this.state.users];

    filteredUsersCopy.sort((a, b) => {
      return a.name.last.localeCompare(b.name.last);
    });

    this.setState({
      filteredUsers: filteredUsersCopy
    });
  };

  /* Keeping state in parent compenent to pass down.
    For a larger application I would suggest redux or
    other state managment tool. 
    However, would be overengineering here
  */
  render() {
    return (
      <>
        <SearchDisplay
          sortClickHandler={this.sortClickHandler}
          inputValue={this.state.value}
          onSearchChange={this.handleChange}
        />
        <CardsDisplay
          users={
            this.state.filteredUsers.length
              ? this.state.filteredUsers
              : this.state.users
          }
        />
      </>
    );
  }
}

export default UserSearch;
