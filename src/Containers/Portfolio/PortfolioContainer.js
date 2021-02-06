import React, { Component } from 'react';

import classes from './PortfolioContainer.module.css';

import MainPagePicture from '../../Components/Backgrounds/MainPageBackground/Background2';
import NavigationButton from '../../UI/Buttons/NavigationButton';
import Skills from '../../Components/Backgrounds/Education/Skills';
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
                <h1>Portfolio</h1>
                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                    <h3>Hei!</h3>
                    <p>
                        Olen koonnut tänne kaikki tiedot koulutuksestani, työkokemuksestani sekä taidoistani ansioluettelon tavoin. Tämä sivu ei kuitenkaan ole ansioluettelo ja poikkeaa
                        perinteisestä ansioluettelosta, sillä erotuksella, että esitän asiat omalla tavallani.  
                    </p>
                    </div>
                </div>

                <div className={classes.EducationInfo}>
                            <div className={classes.educationPicture}>
                                <Uwasa2/>
                            </div>
                    <div className={classes.EducationInfoBox}>
                        <h2>Koulutus</h2>
                            <p>
                                
                            </p>
                                <NavigationButton link="/education">Lue lisää</NavigationButton>
                            <div className={classes.Button}>
                            </div>
                    </div>
                    <div className={classes.ExperienceInfoBox}>
                        <h2>Työkokemus</h2>
                            <p>
                                
                            </p>
                                <NavigationButton link="/experience">Lue lisää</NavigationButton>
                            <div className={classes.Button}>
                            </div>
                    </div>
                </div>
             {/*    <div className={classes.ExperienceInfo}>
                    <div className={classes.PictureBackground}>
                      <Plant/>
                    </div>
                </div> */}
                <div className={classes.SkillsInfo}>
                    <div className={classes.SkillsInfoBox}>
                        <h2>Osaaminen</h2>
                            <p>
                                
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
                                
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/freetime">Lue lisää</NavigationButton>
                            </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PortfolioContainer;