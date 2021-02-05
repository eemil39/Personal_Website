import React, { Component } from 'react';

import classes from './MainPageContainer.module.css';

import MainPagePicture from '../../Components/Backgrounds/MainPageBackground/Background1';
import NavigationButton from '../../UI/Buttons/NavigationButton';
import ProfilePicture from '../../Components/Backgrounds/ProfilePicture/ProfilePicture';
import EducationPicture from '../../Components/Backgrounds/Education/EducationPicture';
import Contacts from '../../Components/Backgrounds/MainPageBackground/Contact';
import Software from '../../Components/Backgrounds/MainPageBackground/Software';


class MainPageContainer extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    
    render() {
        return(
            <div>
                <div className={classes.NameContainer}>
                    <h1>Eemil Vähä</h1>
                </div>

                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                        <h3>Hei!</h3>
                        <p>
                            Olen {this.getAge("1997-05-27")}-vuotias automaatio ja tietotekniikan opisklija.
                        </p>
                    </div>
                    <div className={classes.ProfilePicture}>
                        <ProfilePicture/>
                    </div>
                </div>
                <div className={classes.MainPagePicture}>
                    <MainPagePicture/>
                </div>
                <div className={classes.PortfolioInfo}>
                            <div className={classes.PictureBackground}>
                                <EducationPicture/>
                            </div>
                    <div className={classes.PortfolioInfoBox}>
                        <h2>Portfolio</h2>
                            <p>
                                Portfolio välilehdeltä löydät tietoa koulutuksestani, työkokemuksestani, osaamisestani sekä harrastuksistani. Nämä kaikki 
                                tiedot löytyvät myös ansioluettelostani, mutta koin tarpeelliseksi kertoa hieman enemmän itsestäni, joten loin tämän sivun.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/curriculum-vitae">Lue lisää</NavigationButton>
                            </div>
                    </div>
                </div>
                <div className={classes.ExperienceInfo}>
                    <div className={classes.ExperienceInfoBox}>
                        <h2>Ohjelmointi projektit</h2>
                            <p>
                                Kerron omista ohjelmointi projekteistani, jotka ovat mainitsemisen arvoisia.  
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/projects">Lue lisää</NavigationButton>
                            </div>
                    </div>
                    <div className={classes.PictureBackground}>
                        <Software/>
                    </div>
                </div>
                <div className={classes.SkillsInfo}>
                    <div className={classes.PictureBackground}>
                        <Contacts/>
                    </div>
                    <div className={classes.SkillsInfoBox}>
                        <h2>Ota yhteyttä</h2>
                            <p>
                                Jos sinulla on jotain kysyttävää ja arvelet, että minulla voisi olla vastaus siihen, otathan rohkeasti yhteyttä. 
                                Löydät yhteistietoni, yhteistiedot välilehdeltä.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/yhteistiedot">Yhteistietoihin</NavigationButton>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageContainer;