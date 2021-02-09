import React from 'react';

import classes from './Footer.module.css';

import Twitter from '../../Assets/png/png2/001-twitter.png';
import Facebook from '../../Assets/png/png2/002-facebook.png';
import Instagram from '../../Assets/png/png2/003-instagram.png';
import Linkedin from '../../Assets/png/png2/004-linkedin.png';


const footer = (props) => (
    <div className={classes.footerWrapper}>
        <div className={classes.footer}>
            <div className={classes.footerBox_1}>
                <h2>Help</h2>
                <a href="/terms">Terms &amp; conditions</a>
                <a href="/privacypolicy">Privacy Policy</a>
            </div>
            <div className={classes.footerBox_1}>
                <h2>More</h2>
                <a href="/more">About</a>
            </div>
            <div className={classes.footerBox_2}>
                <h2>Follow Me</h2>
                <a href="https://www.facebook.com/eemil.vaha"><img src={Facebook} alt=""></img></a>
                <a href="https://twitter.com/EemilVh"><img src={Twitter} alt=""></img></a>
                <a href="https://www.instagram.com/eemilvahaa/"><img src={Instagram} alt=""></img></a>
                <a href="https://www.linkedin.com/in/eemil-v%C3%A4h%C3%A4-3ba878196/"><img src={Linkedin} alt=""></img></a>
            </div>
        </div>
        <div>
            <span>Copyright &copy; 2021 Eemil Vähä - made by me.</span>
        </div>
    </div>
)

export default footer;