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
                       On this page you can find information about my education, experience, skills and hobbies. All this information can also be found in my resume, but on 
                       this page, I tell a bit more about these things. 
                    </p>
                    :this.props.language === 'Swe'?   
                    <p>
                        På denna sidan finns information om min utbildning, arbetserfarenhet, kompetens och hobbyer. Mitt mål är att förmedla lite mer information än vad saker listade i Cv:n gör. 
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
                            I have studied for most of my life just like everybody else in my age. I have completed comprehensive school and high school in Swedish and therefore my 
                            language of secondary education is Swedish. At the moment I am studying in Vaasa University and working on my bachelor's thesis. 
                        </p>
                        :this.props.language === 'Swe'?        
                        <p>
                            Jag har studerat för de mesta av mitt liv precis som alla andra i mitt ålder har gjort. Jag har gått grundskolan och gymnasiet på svenska i Svenska Privatskolan i 
                            Uleåborg. Nuförtiden studerar jag på Vasa Universitetet och arbetar på min kandidatavhandling. 
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
                                Työkokemus on ansioluettelon tärkeimpiä osioita ja se kertoo paljon henkilön osaamistasosta, mutta ei kerro koko totuutta ja on vain osa kokonaisuutta. 
                                Kaikki työkokemukseni on tähän mennessä pääasiassa kertynyt rakennusalalta. Voit lukea lisää edesottamuksistani raksalla “Työkokemus” sivulla. 
                            </p>
                        : this.props.language === 'Eng'?         
                            <p>
                                Work experience is one of the most important section of a resume. Work experience tells a lot about his or her skill set, but not everything. 
                                I have gathered most of my work experience working in the construction industry. You can read more about my experience on the work experience page. 
                            </p>
                        : this.props.language === 'Swe'?        
                            <p>
                                Arbetserfarenhet är en av de viktigaste delen av cv:n. Arbetserfarenhet berättar mycket om personens kompetens men inte hela sanningen. 
                                Jag har fått det mesta av min arbetslivserfarenhet från byggbranschen. 
                            </p>
                        :         
                            <p>
                                Työkokemus on ansioluettelon tärkeimpiä osioita ja se kertoo paljon henkilön osaamistasosta, mutta ei kerro koko totuutta ja on vain osa kokonaisuutta. 
                                Kaikki työkokemukseni on tähän mennessä pääasiassa kertynyt rakennusalalta. Voit lukea lisää edesottamuksistani raksalla “Työkokemus” sivulla. 
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
                                Tällä välilehdellä kerron omista kielitaidoistani ja  kokemuksista eri ohjelmointikielien sekä niihin liittyvien ohjelmien parissa. 
                            </p>
                        :this.props.language === 'Eng'? 
                            <p>
                               
                            </p>
                        :this.props.language === 'Swe'? 
                            <p>
                               
                            </p>
                        : 
                            <p>
                                Tällä välilehdellä kerron omista kielitaidoistani ja  kokemuksista eri ohjelmointikielien sekä niihin liittyvien ohjelmien parissa. 
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
                                Harrastukset kertovat paljon ihmisestä ja hänen kiinnostuksen kohteista. Yleensä harrastukset jäävät vähälle huomiolle ansioluettelossa, joten päätin luoda kokonaan oman välilehden harrastuksille.  
                            </p>
                        :this.props.language === 'Eng'?      
                            <p>
                               
                            </p>
                        :this.props.language === 'Swe'?      
                            <p>
                                
                            </p>
                        :      
                            <p>
                                HHarrastukset kertovat paljon ihmisestä ja hänen kiinnostuksen kohteista. Yleensä harrastukset jäävät vähälle huomiolle ansioluettelossa, joten päätin luoda kokonaan oman välilehden harrastuksille.  
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