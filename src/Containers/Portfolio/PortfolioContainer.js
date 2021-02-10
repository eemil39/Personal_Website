import React, { Component } from 'react';

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
                    <h1>Portfolio</h1>
                </div>
                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                    <h3>Hei!</h3>
                    <p>
                        Olen koonnut tänne kaikki tiedot koulutuksestani, työkokemuksestani sekä taidoistani ansioluettelon tavoin. Tämä sivu ei kuitenkaan ole ansioluettelo ja poikkeaa
                        perinteisestä ansioluettelosta, sillä erotuksella, että esitän asiat omalla tavallani.  
                    </p>
                    </div>
                </div>
                <div className={classes.wrapper}>
                <div className={classes.EducationInfo}>
                            <div className={classes.PictureBackground}>
                               <Uwasa2/>
                            </div>
                    <div className={classes.EducationInfoBox}>
                        <h2>Koulutus</h2>
                            <p>
                                Koulun penkillä olen istunut tähän astiseta elämästäni valtaosan, aivan kuten kaikki muutkin ikäiseni. Peruskoulun ja lukion olen suorittanut
                                ruotsiksi koulussa Svenska Privatskolan i Uleåborg, minkä vuoksi koulusivistyskieleni on ruotsi. Tällä hetkellä minulla on menossa kandivuosi Vaasan yliopistossa ja
                                kandityön kirjoitus projekti käynnissä. 
                            </p>
                                <NavigationButton link="/education">Lue lisää</NavigationButton>
                            <div className={classes.Button}>
                            </div>
                    </div>
                    <div className={classes.ExperienceInfoBox}>
                        <h2>Työkokemus</h2>
                            <p>
                                Kaikki työkokemukseni on pääasiassa kertynyt rakennusalalta. Yläaste ikäisetä olen kulkenut kaikki kesät raksalla, minkä vuoksi olen mielestäni omaksunut ahkeran työmoraalin.
                                Kukaan ei ole seppä syntyessään, mutta eihän siitä haittaa ole jos jotain osaa ennestään, päinvastoin.
                            </p>
                                <NavigationButton link="/experience">Lue lisää</NavigationButton>
                            <div className={classes.Button}>
                            </div>
                    </div>
                </div>
                <div className={classes.SkillsInfo}>
                    <div className={classes.SkillsInfoBox}>
                        <h2>Osaaminen</h2>
                            <p>
                                Tällä välilehdellä kerron omista kielitaidoistani ja kokemuksestani eri ohjelmointikielien sekä ohjelmien parissa.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/skills">Lue lisää</NavigationButton>
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
                        <h2>Harrastukset</h2>
                            <p>
                                Harrastukset kertovat paljon ihmisestä, joten tottakai harrastuksetkin tarvitsee oman välilehden, missä kerron omistani.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/freetime">Lue lisää</NavigationButton>
                            </div>
                    </div>
                </div>
                </div>
                <div className={classes.MainPagePictureMobile}>
                       
                       </div> 
            </div>
        );
    }
}

export default PortfolioContainer;