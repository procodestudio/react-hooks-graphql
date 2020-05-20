import React, { Component } from 'react';
import CardList from '../card-list';
import './styles.css';

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
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
