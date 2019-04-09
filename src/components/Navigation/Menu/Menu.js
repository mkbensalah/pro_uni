import React from 'react';

import classes from './Menu.css';
import Aux from '../../../hoc/Auxliary';
import img from '../../../asstes/images/phone.png';
import log from '../../../asstes/images/log.png';


const menu = (props) => (
    <Aux>
        <header className={classes.Toolbar}>
            <div className={classes.topheaderarea}>
                <div className="h-100 d-md-flex justify-content-between align-items-center">
                    <div className={classes.emailaddress}>
                        <a href="mailto:contact@southtemplate.com">contact@southtemplate.com</a>
                    </div>
                    <div className={[classes.phonenumber, "d-flex"].join(' ')}>
                        <div className={classes.icon}>
                            <img src={img} alt="" />
                        </div>
                        <div className={classes.number}>
                            <a href="tel:+45 677 8993000 223">+45 677 8993000 223</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.mainheaderarea} id="stickyHeader">
                <div className={[classes.classynavcontainer, classes.breakpointoff].join(' ')}>
                    <nav className={[classes.classynavbar, "justify-content-between"].join(' ')} id="southNav">
                        <a className={classes.navbrand} href="index.html"><img src={log} alt="" /></a>
                        <div className={classes.classynavbartoggler}>
                            <span className={classes.navbarToggler}><span></span><span></span><span></span></span>
                        </div>
                        <div className={classes.classymenu} >
                            <div className={classes.classycloseIcon}>
                                <div className={classes.crosswrap}><span className="top"></span><span className="bottom"></span></div>
                            </div>
                            <div className={classes.classynav}>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="index.html">Pages</a></li>
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="listings.html">Properties</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </Aux>
);


export default menu;
