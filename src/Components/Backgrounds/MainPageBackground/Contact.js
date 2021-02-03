import React from 'react';

import Background from '../../../Assets/Images/Yhteistiedot.JPG'; 
import classes from './Contact.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 