import React from 'react';

import Background from '../../../Assets/Images/Vaasa.jpg'; 
import classes from './Background1.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 