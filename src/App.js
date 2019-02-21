import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home';
import FirstPage from './containers/FirstPage/FirstPage';
import { Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/" exact component={FirstPage}/>
                </Switch>
            </Layout>
        </div>
    );
  }
}

export default App;
