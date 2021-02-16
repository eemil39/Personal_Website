import React, { Component } from 'react';
import { connect } from 'react-redux';


import classes from './PortfolioContainer.module.css';

import MainPagePicture from '../../Components/Backgrounds/MainPageBackground/Background1';
import NavigationButton from '../../UI/Buttons/NavigationButton';
import Skills from '../../Components/Backgrounds/Education/EducationPicture';
import Uwasa2 from '../../Components/Backgrounds/Education/Uwasa2';
import Hobbies from '../../Components/Backgrounds/Education/Hobbies';


class PortfolioContainer extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return(
            <div>
                <div className={classes.MainPagePicture}>
                    <MainPagePicture/>
                </div>
                <div className={classes.titleContainer}>
                    {this.props.language === 'Fin'? <h1>Portfolio</h1>
                    :this.props.language === 'Eng'? <h1>Portfolio</h1>
                    :this.props.language === 'Swe'? <h1>Portfölj</h1>
                    : <h1>Portfolio</h1>}
                </div>
                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                    {this.props.language === 'Fin'? <h3>Hei!</h3>
                    :this.props.language === 'Eng'? <h3>Hi!</h3>
                    :this.props.language === 'Swe'? <h3>Hej!</h3>
                    : <h3>Hei!</h3>}

                    {this.props.language === 'Fin'?    
                    <p>
                        Olen koonnut tänne kaikki tiedot koulutuksestani, työkokemuksestani, taidoistani sekä harrastuksistani ansioluettelon tavoin. Pyrkimykseni on kuitenkin
                        välittää hieman enemmän informaatiota kuin, mitä pelkästään asioiden luetteleminen CV:ssä välittää. 
                    </p>
                    :this.props.language === 'Eng'?    
                    <p>
                        
                    </p>
                    :this.props.language === 'Swe'?   
                    <p>
                        
                    </p>
                    :    
                    <p>
                        Olen koonnut tänne kaikki tiedot koulutuksestani, työkokemuksestani, taidoistani sekä harrastuksistani ansioluettelon tavoin. Pyrkimykseni on kuitenkin
                        välittää hieman enemmän informaatiota kuin, mitä pelkästään asioiden luetteleminen CV:ssä välittää. 
                    </p>}
                    </div>
                </div>
                <div className={classes.wrapper}>
                <div className={classes.EducationInfo}>
                            <div className={classes.PictureBackground}>
                               <Uwasa2/>
                            </div>
                    <div className={classes.EducationInfoBox}>

                        {this.props.language === 'Fin'? <h2>Koulutus</h2>
                        :this.props.language === 'Eng'? <h2>Education</h2>
                        :this.props.language === 'Swe'? <h2>Utbildning</h2>
                        : <h2>Koulutus</h2>}
                     
                        {this.props.language === 'Fin'?         
                        <p>
                            Koulun penkillä olen istunut tähän astiseta elämästäni valtaosan, aivan kuten kaikki muutkin ikäiseni. Peruskoulun ja lukion olen suorittanut
                            ruotsiksi koulussa Svenska Privatskolan i Uleåborg, minkä vuoksi koulusivistyskieleni on ruotsi. Tällä hetkellä minulla on menossa kandivuosi Vaasan yliopistossa ja
                            kandityön kirjoitus projekti käynnissä. 
                        </p>
                        :this.props.language === 'Eng'?         
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?        
                        <p>
                            
                        </p>
                        :         
                        <p>
                            Koulun penkillä olen istunut tähän astiseta elämästäni valtaosan, aivan kuten kaikki muutkin ikäiseni. Peruskoulun ja lukion olen suorittanut
                            ruotsiksi koulussa Svenska Privatskolan i Uleåborg, minkä vuoksi koulusivistyskieleni on ruotsi. Tällä hetkellä minulla on menossa kandivuosi Vaasan yliopistossa ja
                            kandityön kirjoitusprojekti käynnissä. 
                        </p>}

                                <NavigationButton link="/education">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>
                            <div className={classes.Button}>
                            </div>
                    </div>
                    <div className={classes.ExperienceInfoBox}>

                        {this.props.language === 'Fin'? <h2>Työkokemus</h2>
                        :this.props.language === 'Eng'? <h2>Experience</h2>
                        :this.props.language === 'Swe'? <h2>Arbetserfarenhet</h2>
                        : <h2>Työkokemus</h2>}

                        {this.props.language === 'Fin'?         
                            <p>
                                Kaikki työkokemukseni on pääasiassa kertynyt rakennusalalta. Yläasteikäisetä olen kulkenut kaikki kesät raksalla, minkä vuoksi olen mielestäni omaksunut ahkeran työmoraalin.
                                Kukaan ei ole seppä syntyessään, mutta eihän siitä haittaa ole jos jotain osaa ennestään, päinvastoin.
                            </p>
                        : this.props.language === 'Eng'?         
                            <p>
                                
                            </p>
                        : this.props.language === 'Swe'?        
                            <p>
                                
                            </p>
                        :         
                            <p>
                                Kaikki työkokemukseni on pääasiassa kertynyt rakennusalalta. Yläasteikäisetä olen kulkenut kaikki kesät raksalla, minkä vuoksi olen mielestäni omaksunut ahkeran työmoraalin.
                                Kukaan ei ole seppä syntyessään, mutta eihän siitä haittaa ole jos jotain osaa ennestään, päinvastoin.
                            </p>}
                    
                                <NavigationButton link="/experience">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>

                    </div>
                </div>
                </div>

                <div className={classes.SkillsInfo}>
                    <div className={classes.SkillsInfoBox}>
                        
                        {this.props.language === 'Fin'? <h2>Osaaminen</h2>
                        :this.props.language === 'Eng'? <h2>Skills</h2>
                        :this.props.language === 'Swe'? <h2>Kompetens</h2>
                        : <h2>Osaaminen</h2>}
                  
                        {this.props.language === 'Fin'? 
                            <p>
                                Tällä välilehdellä kerron omista kielitaidoistani ja kokemuksestani eri ohjelmointikielien sekä ohjelmien parissa.
                            </p>
                        :this.props.language === 'Eng'? 
                            <p>
                               
                            </p>
                        :this.props.language === 'Swe'? 
                            <p>
                               
                            </p>
                        : 
                            <p>
                                Tällä välilehdellä kerron omista kielitaidoistani ja kokemuksestani eri ohjelmointikielien sekä ohjelmien parissa.
                            </p>}

                            <div className={classes.Button}>
                                <NavigationButton link="/skills">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>
                            </div>
                    </div>
                    <div className={classes.PictureBackground}>
                        <Skills/>
                    </div>
                </div>
                <div className={classes.HobbiesInfo}>
                    <div className={classes.PictureBackground}>
                        <Hobbies/>
                    </div>
                    <div className={classes.HobbiesInfoBox}>

                        {this.props.language === 'Fin'? <h2>Harrastukset</h2>
                        :this.props.language === 'Eng'? <h2>Hobbies</h2>
                        :this.props.language === 'Swe'? <h2>Fritidsintressen</h2>
                        : <h2>Harrastukset</h2>}
                     
                        {this.props.language === 'Fin'?      
                            <p>
                                Harrastukset kertovat paljon ihmisestä, joten tottakai harrastuksetkin tarvitsee oman välilehden, missä kerron omistani.
                            </p>
                        :this.props.language === 'Eng'?      
                            <p>
                               
                            </p>
                        :this.props.language === 'Swe'?      
                            <p>
                                
                            </p>
                        :      
                            <p>
                                Harrastukset kertovat paljon ihmisestä, joten tottakai harrastuksetkin tarvitsee oman välilehden, missä kerron omistani.
                            </p>}

                       
                            <div className={classes.Button}>
                                <NavigationButton link="/freetime">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>
                            </div>
                    </div>
                </div>
                <div className={classes.MainPagePictureMobile}>
                       
                </div> 
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.language.language
    }
}

export default connect(mapStateToProps, null)(PortfolioContainer);