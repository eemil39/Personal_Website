import React from 'react';

import Background from '../../../Assets/Images/EducationPicture.jpg'; 
import classes from './Education.module.css';

const background = (props) => (
    <div className={classes.Background}>
        <img src={Background} alt="Background"/>
    </div>
);

export default background; 