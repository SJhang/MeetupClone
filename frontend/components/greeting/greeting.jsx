import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout, login}) => {
  if (currentUser){
    return (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <br/>
        <Link to='/signup'>Sign Up</Link>
        <br/>
        <a onClick={ () => login({username: "guest", password: "password"})}>
        </a>
      </div>
    );
  }
};


export default Greeting;