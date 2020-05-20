import React, { Component } from 'react';

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
        { users.map((user) => <h1 className="username" key={user.id}>{user.name}</h1>) }
      </div>
    );
  }
}

export default App;
