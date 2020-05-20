import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        { id: 1, name: 'Paula' },
        { id: 2, name: 'Joseph' },
        { id: 3, name: 'Mike' },
        { id: 4, name: 'Albert' },
      ],
    };
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
