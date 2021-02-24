import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
    className={classes.ToolbarButton}
    onClick={props.click}>{props.children}
    </button>
    
)

export default button;