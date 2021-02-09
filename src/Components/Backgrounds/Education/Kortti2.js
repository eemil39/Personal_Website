import React from 'react';

import Background from '../../../Assets/Images/Kortti2.jpg'; 
import classes from './Logo.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 