import React from 'react';

import Background from '../../../Assets/Images/Software2.JPG'; 
import classes from './General.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 