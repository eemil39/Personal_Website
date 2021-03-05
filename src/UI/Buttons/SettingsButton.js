import React from 'react';

import classes from './Button.module.css';

const settingsButton = (props) => (
    <div
    className={classes.settingsButton}
    onClick={props.click}>{props.children}
    </div>
    
)

export default settingsButton;