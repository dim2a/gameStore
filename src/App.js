import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';

const home = () => {
  return <div>Home</div>;
};
const about = () => {
  return <div>About</div>;
};
const contacts = () => {
  return <div>Contacts</div>;
};

function App() {
  return (
    <Switch>
      <Route path="/about" component={about} />
      <Route path="/contacts" component={contacts} />
      <Route path="/" exact component={home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
