import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div >
    <h1 className="main-page">
      Meetups
      <GreetingContainer />
    </h1>
    { children }
  </div>
);

export default App;
