import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/home">Service</NavigationItem>
        <NavigationItem link="/Login">LogIn</NavigationItem>
    </ul>
);

export default navigationItems;
