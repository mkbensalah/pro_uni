import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout'
import Home from './containers/Home/Home';

import { Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/" component={Home}/>
                    
                </Switch>
            </Layout>
        </div>
    );
  }
}
 
export default App;
