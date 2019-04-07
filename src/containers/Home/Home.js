import React, { Component } from 'react';


import Aux from '../../hoc/Auxliary';
import FirstPage from '../FirstPage/FirstPage'
import Search from '../../components/Search/Search'


class Home extends Component {
    render () {
        return (
            <Aux>
                
               
               <FirstPage  />
               <Search  />
               
            </Aux>
        );
    }
}

export default Home;
