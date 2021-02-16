import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <h1>{this.props.language === 'Fin' ? 'Yhteystiedot' : this.props.language === 'Eng' ? 'Contact information' :this.props.language === 'Swe' ? 'Kontaktinformationen' : 'Yhteystiedot' }</h1>
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
                        <h2>{this.props.language === 'Fin' ? 'Etu- ja sukunimi:' : this.props.language === 'Eng' ? 'Name:' :this.props.language === 'Swe' ? 'Namn:' : 'Etu- ja sukunimi:' }</h2>
                        <h2>{this.props.language === 'Fin' ? 'Puhelinnumero:' : this.props.language === 'Eng' ? 'Phone number:' :this.props.language === 'Swe' ? 'Telefonnummer:' : 'Puhelinnumero' }</h2>
                        <h2>{this.props.language === 'Fin' ? 'Sähköpostiosoite:' : this.props.language === 'Eng' ? 'Email:' :this.props.language === 'Swe' ? 'E-post:' : 'Sähköpostiosoite:' }</h2>
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
                        <h2>{this.props.language === 'Fin' ? 'Etu- ja sukunimi:' : this.props.language === 'Eng' ? 'Name:' :this.props.language === 'Swe' ? 'Namn:' : 'Etu- ja sukunimi:' }</h2>
                        <h3>Eemil Vähä</h3>
                    </div>
          
                    <div className={classes.contactBoxEmail}>
                        <div className={classes.icon}>
                            <img src={email} alt=""></img>
                        </div>
                        <h2>{this.props.language === 'Fin' ? 'Sähköpostiosoite:' : this.props.language === 'Eng' ? 'Email:' :this.props.language === 'Swe' ? 'E-post:' : 'Sähköpostiosoite:' }</h2>
                        <h3>eemil_vaha@hotmail.com</h3>
                    </div>

                    <div className={classes.contactBoxPhone}>
                        <div className={classes.icon}>
                            <img src={phone} alt=""></img>
                        </div>
                        <h2>{this.props.language === 'Fin' ? 'Puhelinnumero:' : this.props.language === 'Eng' ? 'Phone number:' :this.props.language === 'Swe' ? 'Telefonnummer:' : 'Puhelinnumero' }</h2>
                        <h3>0445228850</h3>
                    </div>
                </div>
                
                <div className={classes.emailBox}>
                    <div className={classes.emailLink}>
                        {this.props.language === 'Fin' ?   <a href="mailto:eemil_vaha@hotmail.com">Lähetä sähköposti</a>
                        : this.props.language === 'Eng' ?  <a href="mailto:eemil_vaha@hotmail.com">Send Email</a>
                        : this.props.language === 'Swe' ?  <a href="mailto:eemil_vaha@hotmail.com">Skicka e-post</a>
                        : <a href="mailto:eemil_vaha@hotmail.com">Lähetä sähköposti</a>}
                    </div>
                </div>
                <h1>{this.props.language === 'Fin' ? 'Sosiaalinen media' : this.props.language === 'Eng' ? 'Social media' :this.props.language === 'Swe' ? 'Sociala medier' : 'Sosiaalinen media' }</h1>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.language
    }
}

export default connect(mapStateToProps, null)(ContactPageContainer);