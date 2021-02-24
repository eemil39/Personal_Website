import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Language from '../../UI/Buttons/ToolbarButton';
import Fin from '../../Assets/png/png2/001-finland.png';
import UK from '../../Assets/png/png2/002-united-kingdom.png';
import Swe from '../../Assets/png/png2/001-sweden.png';

class NavigationItems extends Component {

    changeLanguageToFin = () =>{
        this.props.onChange('Fin')
    }
    changeLanguageToEng = () =>{
        this.props.onChange('Eng')
    }
    changeLanguageToSwe = () =>{
        this.props.onChange('Swe')
    }

    render(){
        let content = null;
        if(this.props.language === 'Eng'){
            content = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/"  exact>Home</NavigationItem>
                <NavigationItem link="/curriculum-vitae">Portfolio</NavigationItem>
                <NavigationItem link="/yhteystiedot">Contact</NavigationItem>
                <Language click={this.changeLanguageToFin}><img src={Fin} alt=""></img></Language>
                <Language click={this.changeLanguageToEng}><img src={UK} alt=""></img></Language>
                <Language click={this.changeLanguageToSwe}><img src={Swe} alt=""></img></Language>
                { this.props.isAuthenticated 
                    ? <NavigationItem link="/logout">Logout</NavigationItem>
                    : <div></div>}
            </ul>
            );
        }
        if(this.props.language === 'Fin'){
            content = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/"  exact>Etusivu</NavigationItem>
                <NavigationItem link="/curriculum-vitae">Portfolio</NavigationItem>
                <NavigationItem link="/yhteystiedot">Yhteystiedot</NavigationItem>
                <Language click={this.changeLanguageToFin}><img src={Fin} alt=""></img></Language>
                <Language click={this.changeLanguageToEng}><img src={UK} alt=""></img></Language>
                <Language click={this.changeLanguageToSwe}><img src={Swe} alt=""></img></Language>
                { this.props.isAuthenticated 
                    ? <NavigationItem link="/logout">Logout</NavigationItem>
                    : <div></div>}
            </ul>
            );
        }
        if(this.props.language === 'Swe'){
            content = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/"  exact>Framsida</NavigationItem>
                <NavigationItem link="/curriculum-vitae">Portfölj</NavigationItem>
                <NavigationItem link="/yhteystiedot">Kontakta</NavigationItem>
                <Language click={this.changeLanguageToFin}><img src={Fin} alt=""></img></Language>
                <Language click={this.changeLanguageToEng}><img src={UK} alt=""></img></Language>
                <Language click={this.changeLanguageToSwe}><img src={Swe} alt=""></img></Language>
                { this.props.isAuthenticated 
                    ? <NavigationItem link="/logout">Logga ut</NavigationItem>
                    : <div></div>}
            </ul>
            );
        }
        return (
            <div>

                {content}
            </div>
        );
    }
};
const mapStateToProps = state => {
    return {
        language: state.language.language
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChange: (language) => dispatch(actions.changeLanguage(language))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItems);