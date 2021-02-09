import React from 'react';

import Background from '../../../Assets/Images/Kirja4.jpg'; 
import classes from './Book.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 