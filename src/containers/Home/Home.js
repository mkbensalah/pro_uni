import React, { Component } from 'react';


import Aux from '../../hoc/Auxliary';
import RequiredBuilding from '../../components/RequiredBuilding/RequiredBuilding';


class Home extends Component {
    render () {
        return (
            <Aux>
                <RequiredBuilding/>
            </Aux>
        );
    }
}

export default Home;
