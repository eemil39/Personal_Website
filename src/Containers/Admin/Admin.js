import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Admin.module.css';
import SmallTriangleRight from '../../UI/Arrow/SmallTriangleRight';
import SmallTriangleDown from '../../UI/Arrow/SmallTriangleDown';
import SettingsButton from '../../UI/Buttons/SettingsButton';
import SettingsButton2 from '../../UI/Buttons/SettingsButton_2';
import BooksForm from '../../Components/Form/BooksForm';
import BooksContainerEditable from '../../Components/BooksContainer/BooksContainerEditable';

class Admin extends Component{
    
    state = {
        showBooksform: false,
        showBooks: false
    }


    componentDidMount() {
        window.scrollTo(0, 0)
      }

    changeState = (state) => {
        if(state === 'showBooksform') {
            this.state.showBooksform ? this.setState({showBooksform: false}) : this.setState({showBooksform: true})
        }
        if(state === 'showBooks') {
            this.state.showBooks ? this.setState({showBooks: false}) : this.setState({showBooks: true})
        }
    }
    
    render() {
        let content = <div></div>;
        if (this.props.isAuthenticated ){
            content = (
                <div>
                    <h1>Asetukset</h1>
                    <div className={classes.Main}>
                        <div className={classes.section_1}>
                            <h2>Käyttäjät</h2>
                            <div className={classes.setting}>
                                <h3>Kirjaudu ulos</h3>
                                <SettingsButton2 link="/logout">Kirjaudu ulos</SettingsButton2>
                            </div>
                            <div className={classes.setting}>
                                <h3>Rekisteröi uusi käyttäjä</h3>
                                    <SettingsButton></SettingsButton>
                            </div>
                            <div className={classes.setting}>
                                <h3>Käyttäjät</h3>
                                    <SettingsButton><SmallTriangleRight/></SettingsButton>
                            </div>
                        </div>
                        <div className={classes.section_2}>
                            <h2>Kirjat</h2>
                            <div className={classes.setting}>
                                <h3>Lisää kirja</h3>
                                    <SettingsButton click={() => this.changeState('showBooksform')}>{this.state.showBooksform ? <SmallTriangleDown/> : <SmallTriangleRight/>}</SettingsButton>
                            </div>
                            {this.state.showBooksform ? <BooksForm/> : <div></div>}
                            <div className={classes.setting}>
                                <h3>Muokkaa</h3>
                                <SettingsButton click={() => this.changeState('showBooks')}>{this.state.showBooks ? <SmallTriangleDown/> : <SmallTriangleRight/>}</SettingsButton>
                            </div>
                               <BooksContainerEditable showBooks={this.state.showBooks}/>
                        </div>
                        <div className={classes.section_3}>
                            <h2>Projektit</h2>
                            <div className={classes.setting}>
                                <h3>Lisää projekti</h3>
                                    <SettingsButton><SmallTriangleRight/></SettingsButton>
                            </div>
                            <div className={classes.setting}>
                                <h3>Muokkaa</h3>
                                    <SettingsButton><SmallTriangleRight/></SettingsButton>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return(
            <div>
                {content}
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language.language,
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Admin);