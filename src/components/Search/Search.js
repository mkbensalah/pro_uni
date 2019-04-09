import React from 'react';

import classes from './Search.css';
import Aux from '../../hoc/Auxliary'



const search = (props) => (
    <Aux>
        
        <div className={classes.southsearcharea} >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={classes.advancedsearchform}>
                            
                        <div className={classes.searchtitle}>
                                <p>Search for your home</p>
                            </div>
                            
                        <form action="#" method="post" id="advanceSearch">
                                <div className="row">

                                    <div className="col-12 col-md-4 col-lg-3">
                                        <div className={classes.formgroup}>
                                            <input type="input" className={classes.formcontrol} name="input" placeholder="Keyword"/>
                                    </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className={classes.formgroup}>
                                                <select className={classes.formcontrol} id="cities">
                                                    <option>All Cities</option>
                                                    <option>Riga</option>
                                                    <option>Melbourne</option>
                                                    <option>Vienna</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className={classes.formgroup}>
                                                <select className={classes.formcontrol} id="catagories">
                                                    <option>All Catagories</option>
                                                    <option>Apartment</option>
                                                    <option>Bar</option>
                                                    <option>Farm</option>
                                                    <option>House</option>
                                                    <option>Store</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-lg-3">
                                            <div className={classes.formgroup}>
                                                <select  className={classes.formcontrol}  id="offers">
                                                    <option>All Offers</option>
                                                    <option>100% OFF</option>
                                                    <option>75% OFF</option>
                                                    <option>50% OFF</option>
                                                    <option>25% OFF</option>
                                                    <option>10% OFF</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-xl-3">
                                            <div className={classes.formgroup}>
                                                <select  className={classes.formcontrol}  id="listings">
                                                    <option>All Listings</option>
                                                    <option>Listings 1</option>
                                                    <option>Listings 2</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-xl-2">
                                            <div className={classes.formgroup}>
                                                <select className={classes.formcontrol} id="bedrooms">
                                                    <option>Bedrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-xl-2">
                                            <div  className={classes.formgroup}>
                                                <select className={classes.formcontrol} id="bathrooms">
                                                    <option>Bathrooms</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5+</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-8 col-lg-12 col-xl-5 d-flex">
                                            
                                    <div className={classes.sliderrange}>
                                                <div data-min="120" data-max="820" data-unit=" sq. ft"
                                                   className={[classes.uislider,classes.uisliderhorizontal, classes.uiwidget,classes.uiwidgetcontent , classes.uicornerall ].join(' ')}
                                                    data-value-min="120" data-value-max="820">
                                                    <div className={[classes.uiwidgetheader, classes.uicornerall ].join(' ')}></div>
                                                    <span className={[classes.uistatedefault, classes.uicornerall ].join(' ')} 
                                                        tabindex="0"></span>
                                                    <span className={[classes.uiwidgetheader, classes.uicornerall ].join(' ')}
                                                        tabindex="0"></span>
                                                </div>
                                                <div className="range">120 sq. ft - 820 sq. ft</div>
                                            </div>

                                          
                                    <div className={classes.sliderrange}>
                                                <div data-min="10" data-max="1300" data-unit=" mil"
                                                className={[classes.uislider,classes.uisliderhorizontal, classes.uiwidget,classes.uiwidgetcontent , classes.uicornerall ].join(' ')}
                                                    data-value-min="10" data-value-max="1300">
                                                    <div className={[classes.uiwidgetheader, classes.uicornerall ].join(' ')} ></div>
                                                    <span className={[classes.uistatedefault, classes.uicornerall ].join(' ')} 
                                                        tabindex="0"></span>
                                                    <span className={[classes.uistatedefault, classes.uicornerall ].join(' ')} 
                                                        tabindex="0"></span>
                                                </div>
                                                <div className="range">10 mil - 1300 mil</div>
                                            </div>
                                        </div>

                                        <div className={[classes.searchformsecondsteps, "col-12"]}>
                                            <div className="row">

                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="types">
                                                            <option>All Types</option>
                                                            <option>Apartment <span>(30)</span></option>
                                                            <option>Land <span>(69)</span></option>
                                                            <option>Villas <span>(103)</span></option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="catagories2">
                                                            <option>All Catagories</option>
                                                            <option>Apartment</option>
                                                            <option>Bar</option>
                                                            <option>Farm</option>
                                                            <option>House</option>
                                                            <option>Store</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="Actions">
                                                            <option>All Actions</option>
                                                            <option>Sales</option>
                                                            <option>Booking</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="city2">
                                                            <option>All City</option>
                                                            <option>City 1</option>
                                                            <option>City 2</option>
                                                            <option>City 3</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="Actions3">
                                                            <option>All Actions</option>
                                                            <option>Sales</option>
                                                            <option>Booking</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="city3">
                                                            <option>All City</option>
                                                            <option>City 1</option>
                                                            <option>City 2</option>
                                                            <option>City 3</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-4">
                                                    <div className={classes.formgroup}>
                                                        <select className={classes.formcontrol} id="city5">
                                                            <option>All City</option>
                                                            <option>City 1</option>
                                                            <option>City 2</option>
                                                            <option>City 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={[classes.lignitemsend,"col-12 d-flex align-items-end"]}>
                                            
                                    <div className={classes.morefilter}>
                                                <a href="index.html" id="moreFilter">+ More</a>
                                            </div>
                                           
                                    <div className={[classes.formgroup, classes.SearchBtn].join(' ')}>
                                                <button type="submit" className={classes.southbtn}>Search</button>
                                            </div>
                                        </div>
                                    </div>
                        </form>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
           
    </Aux>
        );
        
        
        export default search;
