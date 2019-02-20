import React from 'react';

import classes from './TopBar.css';

const topBar = (props) => (
    <div className={classes.top_bar}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.top_bar_container}>
                        <div className={classes.logo_container}>
                            <div className={classes.logo}>
                                <a href="#">
                                    <div className={classes.logo_line_1}><span>R</span>eal</div>
                                    <div className={classes.logo_line_2}>estate</div>
                                    <div className={classes.logo_img}><img src="images/logo.png" alt=""/></div>
                                </a>
                            </div>
                        </div>
                        <div className={classes.top_bar_content}>

                            <div className={classes.register_login}>
                                <div className={classes.register}><a href="#">register</a></div>
                                <div className={classes.login}><a href="#">login</a></div>
                            </div>
                        </div>
                        <div className={classes.burger}>
                            <i className={classes.fa}aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>

    </div>
);


export default topBar;
