import React from 'react';

import Background from '../../../Assets/Images/Sali.jpg'; 
import classes from './EducationPicture.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 