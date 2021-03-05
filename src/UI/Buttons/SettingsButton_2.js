import React, { Component } from 'react';

import classes from './Button.module.css';
import { NavLink } from 'react-router-dom';

class NavigationButton extends Component {
    render () {
        return (
         <NavLink className = {classes.settingsButton2}
            exact={this.props.exact}
            to={this.props.link}
            activeClassName={classes.active}>{this.props.children}</NavLink>  
        );
    }
}

export default NavigationButton;