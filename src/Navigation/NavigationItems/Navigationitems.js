import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"  exact>Etusivu</NavigationItem>
        <NavigationItem link="/curriculum-vitae">Portfolio</NavigationItem>
        <NavigationItem link="/yhteistiedot">Yhteistiedot</NavigationItem>
        { props.isAuthenticated 
            ? <NavigationItem link="/logout">Kirjaudu ulos</NavigationItem>
            : <div></div>}

    </ul>
);

export default navigationItems;