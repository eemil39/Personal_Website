import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
    disabled={props.disabled}
    className={classes.Button}
    onClick={props.click}>{props.children}
    </button>
    
)

export default button;