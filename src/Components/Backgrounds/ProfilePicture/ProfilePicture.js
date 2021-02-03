import React from 'react';

import Background from '../../../Assets/Images/ProfilePicture.jpg'; 
import classes from './ProfilePicture.module.css';

const profilePicture = (props) => (
    <div className={classes.ProfilePicture}>
        <img src={Background} alt="Background"/>
    </div>
);

export default profilePicture; 
