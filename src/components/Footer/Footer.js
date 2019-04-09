import React from 'react';

import classes from './Footer.css';
import Aux from '../../hoc/Auxliary';
import foote from '../../asstes/images/footer.jpg'
import logo from '../../asstes/images/log.png';
import phone from '../../asstes/images/phone-call.png'
import envelope from '../../asstes/images/envelope.png'
import location from '../../asstes/images/location.png' 
import fea from '../../asstes/images/fea-product.jpg'

const footer = (props) => (
    <Aux>
        <footer className={[classes.footerarea, classes.sectionpadding100, classes.bgimg, classes.gradientbackgroundoverlay].join(' ')}   >

            <div className="main-footer-area">
                <div className="container">
                    <div className="row">


                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className={[classes.footerwidgetarea, classes.mb100 ].join(' ')} >

                                <div className={classes.widgettitle}>
                                    <h6>About Us</h6>
                                </div>

                                <img src={foote} alt="" />
                                <div className="footer-logo my-4">
                                    <img src={logo} alt="" />
                                </div>
                                <p>Integer nec bibendum lacus. Suspen disse dictum enim sit amet libero males uada feugiat.
                                Praesent malesuada.</p>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className={[classes.footerwidgetarea, classes.mb100 ].join(' ')}>

                                <div  className={classes.widgettitle}>
                                    <h6>Hours</h6>
                                </div>

                                <div className={classes.weeklyofficehours} >
                                    <ul>
                                        <li className={[classes.justifycontentbetween, "d-flex align-items-center"].join(' ')} ><span>Monday -
                                            Friday</span> <span>09 AM - 19 PM</span></li>
                                        <li className={[classes.justifycontentbetween, "d-flex align-items-center"].join(' ')} ><span>Saturday</span>
                                            <span>09 AM - 14 PM</span></li>
                                        <li className={[classes.justifycontentbetween, "d-flex align-items-center"].join(' ')} ><span>Sunday</span>
                                            <span>Closed</span></li>
                                    </ul>
                                </div>

                                <div className={classes.address}>
                                    <h6><img src={phone} alt="" /> +45 677 8993000 223</h6>
                                    <h6><img src={envelope} alt="" /> office@template.com</h6>
                                    <h6><img src={location} alt="" /> Main Str. no 45-46, b3, 56832, Los
                                    Angeles, CA</h6>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className={[classes.footerwidgetarea, classes.mb100].join(' ')}>

                                <div className={classes.widgettitle}>
                                    <h6>Useful Links</h6>
                                </div>

                                <ul className={[classes.usefullinksnav, "useful-links-nav d-flex align-items-center"].join(' ')} >
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">About us</a></li>
                                    <li><a href="index.html">About us</a></li>
                                    <li><a href="index.html">Services</a></li>
                                    <li><a href="index.html">Properties</a></li>
                                    <li><a href="index.html">Listings</a></li>
                                    <li><a href="index.html">Testimonials</a></li>
                                    <li><a href="index.html">Properties</a></li>
                                    <li><a href="index.html">Blog</a></li>
                                    <li><a href="index.html">Testimonials</a></li>
                                    <li><a href="index.html">Contact</a></li>
                                    <li><a href="index.html">Elements</a></li>
                                    <li><a href="index.html">FAQ</a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-xl-3">
                            <div className={[classes.footerwidgetarea, classes.mb100 ].join(' ')}>

                                <div  className={classes.widgettitle}>
                                    <h6>Featured Properties</h6>
                                </div>

                                <div className={classes.featuredpropertiesslides}>

                                    <div className="single-featured-properties-slide">
                                        <a href="index.html"><img src={fea} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="copywrite-text d-flex align-items-center justify-content-center">
                <p>

                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
                with <i className="fa fa-heart-o" aria-hidden="true"></i> </p>

            </div>
        </footer>
    </Aux>
);
export default footer;
