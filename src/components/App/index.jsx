import React, { Component } from 'react';
import CardList from '../card-list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((users) => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <CardList>{ users.map((user) => <h1 className="username" key={user.id}>{user.name}</h1>) }</CardList>
      </div>
    );
  }
}

export default App;
