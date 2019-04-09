import React, { Component } from 'react';


import Aux from '../../hoc/Auxliary';
import FirstPage from '../FirstPage/FirstPage'
import Search from '../../components/Search/Search'
import Properties from '../../components/Properties/Properties'
import Testimonials from '../../components/Testimonials/Testimonials'
import Editor from '../../components/Editor/Editor'
import Footer from '../../components/Footer/Footer'

class Home extends Component {
    render () {
        return (
            <Aux>
                
               
               <FirstPage  />
               <Search  />
               <Properties />
               <Testimonials/>
               <Editor/>
               <Footer/>
            </Aux>
        );
    }
}

export default Home;
