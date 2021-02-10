import React from 'react';

import Background from '../../../Assets/Images/ilmavoimat.jpg'; 
import classes from './Logo.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 