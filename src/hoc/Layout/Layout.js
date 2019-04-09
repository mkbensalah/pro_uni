import React, { Component } from 'react';

import Aux from '../Auxliary';


import Menu from '../../components/Navigation/Menu/Menu'


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }


    render () {
        return (
            <Aux>
                <Menu/>
                <main >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
