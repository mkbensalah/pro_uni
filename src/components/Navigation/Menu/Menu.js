import React from 'react';

import classes from './Menu.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const menu = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo >
                <div className={classes.logo_container}>
                    <div className={classes.logoC}>
                        <div>
                            <div className={classes.logo_line_1}><span>R</span>eal</div>
                            <div className={classes.logo_line_2}>estate</div>
                        </div>
                    </div>
                </div>
            </Logo>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default menu;
