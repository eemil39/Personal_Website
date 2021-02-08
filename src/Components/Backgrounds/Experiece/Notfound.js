import React from 'react';

import Background from '../../../Assets/Images/notfound.jpg'; 
import classes from './Experience.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 