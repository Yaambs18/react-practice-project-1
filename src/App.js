import React, { useState } from 'react';

import './App.css';
import Users from './components/Users/Users';
import NewUser from './components/UserForm/NewUser';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = enteredUser => {
    console.log(enteredUser);
    setUsers([
      enteredUser,
      ...users
    ]);
    console.log(users);
  }

  return (
    <React.Fragment className="App">
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </React.Fragment>
  );
}

export default App;
