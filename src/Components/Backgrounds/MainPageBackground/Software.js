import React from 'react';

import Background from '../../../Assets/Images/Software.jpg'; 
import classes from './Contact.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 