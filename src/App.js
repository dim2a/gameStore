import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './layouts/Layout';
import Header from './components/Header/Header';
import Sidebar from './containers/Sidebar/Sidebar';
import Content from './containers/Content/Content';
import Games from './components/Games/Games';
import Game from './components/Game/Game';
import Cart from './components/Cart/Cart';
import Categories from './containers/Categories/Categories';

function App() {
  return (
    <Layout>
      <Header />
      <Sidebar>
        <Categories />
      </Sidebar>
      <Content>
        <Switch>
          <Route path="/categories/:id" component={Games} />
          <Route path="/games/:id" component={Game} />
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Games} />
          <Redirect to="/" />
        </Switch>
      </Content>
    </Layout>
  );
}

export default App;
