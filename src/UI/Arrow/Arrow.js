import React from 'react';

import classes from './Arrow.module.css';

const arrow = (props) => (
        <div className={classes.Arrows}
        onClick={props.click}>
            <div className={classes.Arrow1}></div>
            <div className={classes.Arrow2}></div>
        </div>
);

export default arrow;