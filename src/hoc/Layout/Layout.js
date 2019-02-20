import React, { Component } from 'react';

import TopBar from '../../components/Navigation/TopBar/TopBar';
import classes from './Layout.css';
import Menu from '../../components/Navigation/Menu/Menu'

class Layout extends Component {
    render () {
        return (
            <div className={classes.home}>
                <header className={classes.header}>
                <TopBar/>
                <Menu/>
                </header>
            </div>
        )
    }
}

export default Layout;
