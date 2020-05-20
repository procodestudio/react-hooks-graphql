import React, { Component } from 'react';
import CardList from '../card-list';
import SearchBox from '../search-box';
import './styles.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchString: '',
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
    this.setState({ searchString: evt.target.value }, () => {
      const { users, searchString } = this.state;
      const filteredUsers = users.filter((user) => (
        user.name.toLowerCase().includes(searchString.toLowerCase())
      ));

      this.setState({ filteredUsers });
    });
  }

  render() {
    const { filteredUsers, searchString } = this.state;

    return (
      <div className="App">
        <SearchBox
          searchString={searchString}
          placeholder="filter users"
          handleChange={(evt) => this.filterUsers(evt)}
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
