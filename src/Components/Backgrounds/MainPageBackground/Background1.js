import React from 'react';
import { Parallax, ParallaxLayer } from 'react-scroll-parallax';

import Background from '../../../Assets/Images/MainPagePicture3.jpg'; 
import classes from './Background1.module.css';

const background = (props) => (
        <Parallax className={classes.Background} y={[-15, 15]}>
            <img src={Background} alt="Background"/>
        </Parallax> 
);

export default background; 