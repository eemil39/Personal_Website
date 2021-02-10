import React, { Component } from 'react';

import classes from './MainPageContainer.module.css';

import NavigationButton from '../../UI/Buttons/NavigationButton';
import ProfilePicture from '../../Components/Backgrounds/ProfilePicture/ProfilePicture';
import Portfolio from '../../Components/Backgrounds/MainPageBackground/Portfolio';
import Contacts from '../../Components/Backgrounds/MainPageBackground/Contact';
import Software from '../../Components/Backgrounds/MainPageBackground/Software';
import MainPagePicture from '../../Components/Backgrounds/MainPageBackground/Background1';
import Arrow from '../../UI/Arrow/Arrow';


class MainPageContainer extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }

      scrollTo2 = () => {
        window.scrollTo(0, 1000);
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
                <div className={classes.background}>
                <div className={classes.NameContainer}>
                    <div className={classes.Hei}>Hei!</div>
                    <div className={classes.Me}>Mä oon</div>
                    <div className={classes.Eemil}>Eemil Vähä.</div>
                </div>
                <Arrow click={this.scrollTo2}/>
                </div>

                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                        <h3>Hei!</h3>
                        <p>
                            "Olen {this.getAge("1997-05-27")}-vuotias miehen alku Vaasasta. Opiskelen kolmatta vuotta automaatio- ja tietotekniikkaa Vaasan Yliopistossa,
                            joten ajattelin, että nyt on sopiva aika luoda omat nettisivut. Loin tämän sivuston, jotta voisin esittää samat asiat kun ansioluettelostani mutta, hieman
                            luovemalla tavalla. Tarkoitukseni on luoda sivusto, mikä kuvastaa minua ja taitojani parhaalla mahdollisella tavalla."
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
                                <Portfolio/>
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
                <div className={classes.ProjectsInfo}>
                    <div className={classes.ProjectsInfoBox}>
                        <h2>Ohjelmointi projektit</h2>
                            <p>
                                Kerron josistain omista ohjelmointi projekteistani, jotka ovat mainitsemisen arvoisia. Tällä hetkellä olen pääasiassa toteuttanut huikeat ideani Reactilla.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/projects">Lue lisää</NavigationButton>
                            </div>
                    </div>
                    <div className={classes.PictureBackground}>
                        <Software/>
                    </div>
                </div>
                <div className={classes.ContactInfo}>
                    <div className={classes.PictureBackground}>
                        <Contacts/>
                    </div>
                    <div className={classes.ContactInfoBox}>
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
                <div className={classes.MainPagePictureMobile}>
                       
                </div> 
            </div>
        );
    }
}

export default MainPageContainer;