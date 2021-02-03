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
                <h1>Eemil Vähä</h1>

                <div className={classes.MainInfo}>
                    <div className={classes.MainInfoBox}>
                        <h3>Hei!</h3>
                        <p>
                            Olen {this.getAge("1997-05-27")}-vuotias automaatio ja tietotekniikan opisklija.
                        </p>
                    </div>
                    <div>
                        <ProfilePicture/>
                    </div>
                </div>
                <div className={classes.MainPagePicture}>
                    <MainPagePicture/>
                </div>
                <div className={classes.EducationInfo}>
                            <div className={classes.PictureBackground}>
                                <EducationPicture/>
                            </div>
                    <div className={classes.EducationInfoBox}>
                        <h2>Ansioluettelo</h2>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                                looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
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
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                from 45 BC, making it over 2000 years old.
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
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                                from 45 BC, making it over 2000 years old.
                            </p>
                            <div className={classes.Button}>
                                <NavigationButton link="/yhteistiedot">Lue lisää</NavigationButton>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageContainer;