import React, { Component } from 'react';
import CardList from '../card-list';
import SearchBox from '../search-box';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      filteredUsers: [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) => this.setState({ users, filteredUsers: users }));
  }

  filterUsers(evt) {
    const { users } = this.state;
    const filteredUsers = users.filter((user) => (
      user.name.toLowerCase().includes(evt.target.value.toLowerCase())
    ));

    this.setState({ filteredUsers });
  }

  render() {
    const { filteredUsers } = this.state;

    return (
      <div className="App">
        <SearchBox
          placeholder="filter users"
          handleChange={(evt) => this.filterUsers(evt)}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
