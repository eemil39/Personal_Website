import React, { Component } from 'react';

import classes from './ContactPageContainer.module.css';
import phone from '../../Assets/png/png2/001-call.png';
import email from '../../Assets/png/png2/002-email.png';
import name from '../../Assets/png/png2/name.png';

class ContactPageContainer extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div>
                <h1>Yhteistiedot</h1>
                <div className={classes.contactBox}>
                    <div className={classes.contactBoxIcons}>
                        <div className={classes.icon}>
                            <img src={name} alt=""></img>
                        </div>
                        <div className={classes.icon}>
                            <img src={email} alt=""></img>
                        </div>
                        <div className={classes.icon}>
                            <img src={phone} alt=""></img>
                        </div>
                    </div>
                    <div className={classes.contactBox1}>
                        <h2>Etu- ja sukunimi</h2>
                        <h2>Sähköpostiosoite</h2>
                        <h2>Puhelinnumero</h2>
                    </div>
                    <div className={classes.contactBox2}>
                        <h2>Eemil Vähä</h2>
                        <h2>0445228850</h2>
                        <h2>eemil_vaha@hotmail.com</h2>
                    </div>
                </div>
                {/*Mobile */}
                <div className={classes.contactBoxContianerMobile}> 
                    <div className={classes.contactBoxName}>
                        <div className={classes.icon}>
                            <img src={name} alt=""></img>
                        </div>
                        <h2>Etu- ja sukunimi:</h2>
                        <h3>Eemil Vähä</h3>
                    </div>
          
                    <div className={classes.contactBoxEmail}>
                        <div className={classes.icon}>
                            <img src={email} alt=""></img>
                        </div>
                        <h2>Sähköpostiosoite:</h2>
                        <h3>eemil_vaha@hotmail.com</h3>
                    </div>

                    <div className={classes.contactBoxPhone}>
                        <div className={classes.icon}>
                            <img src={phone} alt=""></img>
                        </div>
                        <h2>Puhelinnumero:</h2>
                        <h3>0445228850</h3>
                    </div>
                </div>

                <div className={classes.emailBox}>
                    <div className={classes.emailLink}>
                        <a href="mailto:eemil_vaha@hotmail.com">Lähetä sähköposti</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default ContactPageContainer;