import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Layout from './layouts/Layout';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Games from './components/Games/Games';

const detail = props => {
  console.log(props);
  return <div>{`Detail ${props.match.params.id}`}</div>;
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
        <Switch>
          <Route path="/games/:id" component={detail} />
          <Route path="/about" component={about} />
          <Route path="/contacts" component={contacts} />
          <Route path="/" exact component={Games} />
          <Redirect to="/" />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
