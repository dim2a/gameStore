import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import Layout from './layouts/Layout';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

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
    <Layout>
      <Header />
      <Sidebar />
      <Content>
        {/* <Switch>
          <Route path="/about" component={about} />
          <Route path="/contacts" component={contacts} />
          <Route path="/" exact component={home} />
          <Redirect to="/" />
        </Switch> */}
      </Content>
    </Layout>
  );
}

export default App;
