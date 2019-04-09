import React, { Component } from 'react';


import Aux from '../../hoc/Auxliary';
import classes from './FirstPage.css'


 
class FirstPage extends Component {

    render() {

        return (
            <Aux>

                <div id="demo" className="carousel slide" data-ride="carousel">


                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <div className={classes.FirstPage1}>
                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <div className={classes.heroslidescontent}>
                                                <h2>Find your home</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className={classes.FirstPage2}>
                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <div className={classes.heroslidescontent}>
                                                <h2 >Find your dream house</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="carousel-item">
                            <div className={classes.FirstPage3}>
                                <div className="container h-100">
                                    <div className="row h-100 align-items-center">
                                        <div className="col-12">
                                            <div className={classes.heroslidescontent}>
                                                <h2 >Find your perfect house    </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a className={[classes.tes, "carousel-control-prev"].join(' ')} href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className={[classes.tes, "carousel-control-next"].join(' ')} href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>
               
            </Aux>
        );
    }
}

export default FirstPage;
