import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <div className={classes.Hei}>{this.props.language === 'Fin' ? 'Moi!' : this.props.language === 'Eng' ? 'Hi!' :this.props.language === 'Swe' ? 'Hej!' : 'Moi!' }</div>
                    <div className={classes.Me}>{this.props.language === 'Fin' ? 'Mä oon' : this.props.language === 'Eng' ? 'I am' :this.props.language === 'Swe' ? 'Jag är' : 'Mä oon' }</div>
                    <div className={classes.Eemil}>Eemil Vähä.</div>
                </div>
                <Arrow click={this.scrollTo2}/>
                </div>

                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                        <h3>{this.props.language === 'Fin' ? 'Hei!' : this.props.language === 'Eng' ? 'Hi!' :this.props.language === 'Swe' ? 'Hej!' : 'Hei!' }</h3>
                        
                        {this.props.language === 'Fin' ? 
                            <p>
                                Olen {this.getAge("1997-05-27")}-vuotias automaatio ja tietotekniikan opiskelija. Opiskelen jo kolmatta vuotta,
                                joten ajattelin, että nyt on sopiva aika luoda omat nettisivut. Loin tämän sivuston, jotta voisin esittää samat asiat kun ansioluettelostani, mutta hieman
                                luovemalla tavalla. Tarkoitukseni on luoda sivusto, mikä kuvastaa minua ja taitojani parhaalla mahdollisella tavalla. Toivottavasti sivuston visuaalinen ulosanti 
                                miellyttää myös sinuna ja työpanokseni näkyy lopputuloksessa. Tavoitteenani on, että voisin vielä joskus aloittaa tämän tekstin sanoilla, "I am a frontend developer...".
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                                I am {this.getAge("1997-05-27")} years old and studying automation and information technology at Vaasa University. 
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                Olen {this.getAge("1997-05-27")}-vuotias automaatio ja tietotekniikan opiskelija. Opiskelen jo kolmatta vuotta,
                                joten ajattelin, että nyt on sopiva aika luoda omat nettisivut. Loin tämän sivuston, jotta voisin esittää samat asiat kun ansioluettelostani, mutta hieman
                                luovemalla tavalla. Tarkoitukseni on luoda sivusto, mikä kuvastaa minua ja taitojani parhaalla mahdollisella tavalla. Toivottavasti sivuston visuaalinen ulosanti 
                                miellyttää myös sinuna ja työpanokseni näkyy lopputuloksessa. Tavoitteenani on, että voisin vielä joskus aloittaa tämän tekstin sanoilla, "I am a frontend developer...".
                            </p>
                        :   
                            <p>
                                Olen {this.getAge("1997-05-27")}-vuotias automaatio ja tietotekniikan opiskelija. Opiskelen jo kolmatta vuotta,
                                joten ajattelin, että nyt on sopiva aika luoda omat nettisivut. Loin tämän sivuston, jotta voisin esittää samat asiat kun ansioluettelostani, mutta hieman
                                luovemalla tavalla. Tarkoitukseni on luoda sivusto, mikä kuvastaa minua ja taitojani parhaalla mahdollisella tavalla. Toivottavasti sivuston visuaalinen ulosanti 
                                miellyttää myös sinuna ja työpanokseni näkyy lopputuloksessa. Tavoitteenani on, että voisin vielä joskus aloittaa tämän tekstin sanoilla, "I am a frontend developer...".
                            </p>}
    
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
                        
                        {this.props.language === 'Fin' ?   <h2>Portfolio</h2>
                        : this.props.language === 'Eng' ?  <h2>Portfolio</h2>
                        : this.props.language === 'Swe' ?  <h2>Portfölj</h2>
                        : <h2>Portfolio</h2>}

                        {this.props.language === 'Fin' ?        
                            <p>
                                Portfolio välilehdeltä löydät tietoa koulutuksestani, työkokemuksestani, osaamisestani sekä harrastuksistani. Nämä kaikki 
                                tiedot löytyvät myös ansioluettelostani, mutta koin tarpeelliseksi kertoa hieman enemmän itsestäni, joten loin tämän sivun.
                            </p>
                        : this.props.language === 'Eng' ?       
                            <p>
                                On the Portfolio page you can find information about my education, experience, skills and hobbies. All this information can 
                                also be found in my resume, but I wanted to tell more about me so I created an online Portfolio.   
                            </p>
                        : this.props.language === 'Swe' ?       
                            <p>
                                På portfölj sidan hittar du information om min utbildning, erfarenhet,  kompetens och fritidsintressen. Alt det här kan du 
                                också hitta från min CV, men jag ville berätta lite mer om mig själv, så jag skapade en egen sida för det. 
                            </p>
                        :      
                            <p>
                                Portfolio välilehdeltä löydät tietoa koulutuksestani, työkokemuksestani, osaamisestani sekä harrastuksistani. Nämä kaikki 
                                tiedot löytyvät myös ansioluettelostani, mutta koin tarpeelliseksi kertoa hieman enemmän itsestäni, joten loin tämän sivun.
                            </p>}
                
                            <div className={classes.Button}>
                                <NavigationButton link="/curriculum-vitae">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>
                            </div>
                    </div>
                </div>
                <div className={classes.ProjectsInfo}>
                    <div className={classes.ProjectsInfoBox}>
                        {this.props.language === 'Fin' ?   <h2>Omat projektit</h2>
                        : this.props.language === 'Eng' ?  <h2>My projects</h2>
                        : this.props.language === 'Swe' ?  <h2>Mina projekt</h2>
                        : <h2>Omat projektit</h2>}
                   
                        {this.props.language === 'Fin' ?       
                            <p>
                                Kerron omista ohjelmointi projekteistani, jotka ovat mainitsemisen arvoisia. Tähän mennessä olen toteuttanut huikeat ideani pääasiassa Reactilla.
                            </p>
                        : this.props.language === 'Eng' ?     
                            <p>
                                You can read about my programming project on this page. I have implemented my awesome projects mainly with ReactJS so far. 
                             </p>
                        : this.props.language === 'Swe' ?      
                            <p>
                                På den här sidan berättar jag om mina programmeringsprojekt. Hittills har jag genomfört mina fantastiska projekt med ReactJS. 
                            </p>
                        :     
                            <p>
                                Kerron omista ohjelmointi projekteistani, jotka ovat mainitsemisen arvoisia. Tähän mennessä olen toteuttanut huikeat ideani pääasiassa Reactilla.
                            </p>}
                   
                            <div className={classes.Button}>
                                <NavigationButton link="/projects">{this.props.language === 'Fin' ? 'Lue lisää' : this.props.language === 'Eng' ? 'Read more' : this.props.language === 'Swe' ? 'Läs mer': 'Lue lisää'}</NavigationButton>
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
                        {this.props.language === 'Fin' ?   <h2>Ota yhteyttä</h2>
                        : this.props.language === 'Eng' ?  <h2>Contact me</h2>
                        : this.props.language === 'Swe' ?  <h2>Kontakta mig</h2>
                        : <h2>Ota yhteyttä</h2>}

                        {this.props.language === 'Fin' ?           
                            <p>
                                Jos sinulla on jotain kysyttävää ja arvelet, että minulla voisi olla vastaus siihen, otathan rohkeasti yhteyttä. 
                                Löydät yhteystietoni, yhteystiedot välilehdeltä.
                            </p>
                        : this.props.language === 'Eng' ?         
                            <p>
                                If you have a question for me, do not hesitate to ask. You can find my contact information on the contact page.  
                            </p>
                        : this.props.language === 'Swe' ?         
                            <p>
                                Om du har något som du vill fråga av mig, vänligen gör de. Du kan hitta mina kontaktuppgifter på kontakta mig sidan. 
                            </p>
                        :         
                            <p>
                                Jos sinulla on jotain kysyttävää ja arvelet, että minulla voisi olla vastaus siihen, otathan rohkeasti yhteyttä. 
                                Löydät yhteystietoni, yhteystiedot välilehdeltä.
                            </p>}
                       
                            <div className={classes.Button}>
                                <NavigationButton link="/yhteistiedot">{this.props.language === 'Fin' ? 'Yhteystietoihin' : this.props.language === 'Eng' ? 'Contact' : this.props.language === 'Swe' ? 'Kontakta': 'Yhteystietoihin'}</NavigationButton>
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

export default connect(mapStateToProps, null)(MainPageContainer);