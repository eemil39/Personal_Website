import React, { Component } from 'react';

import classes from './ExperiencePageContainer.module.css';
import Eura from '../../Components/Backgrounds/Experiece/Eura';
import Tampere from '../../Components/Backgrounds/Experiece/Tampere';
import Kempele from '../../Components/Backgrounds/Experiece/Kempele';
import AvantLogo from '../../Components/Backgrounds/Experiece/AvantLogo';

class ExperiencePageContainer extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div>
                <h1>Työkokemus</h1>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                        <div className={classes.experienceInfoLink}>
                            <AvantLogo/>
                        </div>
                        <h4>04/2020 - 09/2020</h4>
                        <p>Timpuri</p>
                        <p>
                            Tarkempi kuvaus työtehtävistä. Voit myös kertoa saavutuksistasi tai työssä hankkimastasi erityisosaamisesta.
                        </p>
                        <div className={classes.experienceInfoLink2}>
                            <a href="https://rakennusavant.fi/">rakennusavant.fi</a>
                        </div>    
                    </div>
                    <div className={classes.experiencePicture}>
                        <Kempele/>
                    </div>
                </div>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                        <div className={classes.experienceInfoLink}>
                            <AvantLogo/>
                        </div>
                        <h4>05/2019 - 09/2019</h4>
                        <p>Timpuri</p>
                        <p>Tarkempi kuvaus työtehtävistä. Voit myös kertoa saavutuksistasi tai työssä hankkimastasi erityisosaamisesta.</p>
                        <div className={classes.experienceInfoLink2}>
                            <a href="https://rakennusavant.fi/">rakennusavant.fi</a>
                        </div>
                    </div>
                    <div className={classes.experiencePicture}>
                        <Eura/>
                    </div>
                </div>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                        <div className={classes.experienceInfoLink}>
                            <AvantLogo/>
                    
                        </div>
                        <h4>01/2018 - 09/2018</h4>
                        <p>Vähän kokemusta omaava työntekijä</p>
                        <p>Tarkempi kuvaus työtehtävistä. Voit myös kertoa saavutuksistasi tai työssä hankkimastasi erityisosaamisesta.</p>
                        <div className={classes.experienceInfoLink2}>
                            <a href="https://rakennusavant.fi/">rakennusavant.fi</a>
                        </div>
                    </div>
                    <div className={classes.experiencePicture}>
                        <Tampere/>
                    </div>
                </div>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                        <div className={classes.experienceInfoLink}>
                            <AvantLogo/>
                        </div>
                        <h4>05/2016 - 12/2016</h4>
                        <p>Aloitteleva työntekijä</p>
                        <p>Tarkempi kuvaus työtehtävistä. Voit myös kertoa saavutuksistasi tai työssä hankkimastasi erityisosaamisesta.</p>
                        <div className={classes.experienceInfoLink2}>
                            <a href="https://rakennusavant.fi/">rakennusavant.fi</a>
                        </div>
                    </div>
                    <div className={classes.experiencePicture}>
                        <Eura/>
                    </div>
                </div>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                            <h3>Rakennsupalvelu Sakari Vähä</h3>
                        <h4>05/2015 - 09/2015</h4>
                        <p>Lautapoika</p>
                        <p>Ensimmäinen kesäni töissä kokopäiväsisenä. Toimin lähinnä apulaisena työmaalla ja suoritin työtehtäviä, jotka vastasivat osaamistasoani.
                            Tästä kesästä alkoi näihin päiviin asti kestänyt urani eri työmailla.
                        </p>
                    </div>
                    <div className={classes.experiencePicture}>
                        <Eura/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExperiencePageContainer;