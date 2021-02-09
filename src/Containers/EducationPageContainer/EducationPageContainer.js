import React, { Component } from 'react';

import classes from './EducationPageContainer.module.css';
import Uva from '../../Components/Backgrounds/Education/Uva';
import Spsu from '../../Components/Backgrounds/Education/Spsu';
import Kortti from '../../Components/Backgrounds/Education/Kortti';
import Kortti1 from '../../Components/Backgrounds/Education/Kortti1';
import Kortti2 from '../../Components/Backgrounds/Education/Kortti2';

class EducationPageContainer extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div className={classes.wrapper}>
                <h1>Koulutus</h1>
                <div className={classes.educationInfo}>
                    <div className={classes.educationYear}>
                        <h4>09/2018 - 06/2023</h4>
                    </div>
                    <div className={classes.educationInfoBox}>
                        <div className={classes.educationInfoLink}>
                            <a href="https://www.univaasa.fi/fi">Vaasa Yliopisto</a>
                        </div>
                        <p>Automaatio ja tietotekniikka</p>
                    </div>
                    <div className={classes.Logo}>
                        <Uva/>
                    </div>
                </div>
                <div className={classes.educationInfo}>
                    <div className={classes.educationYear}>
                        <h4>09/2013 - 05/2016</h4>
                    </div>
                    <div className={classes.educationInfoBox}>
                        <div className={classes.educationInfoLink}>
                            <a href="https://www.spsu.fi/">Svenska Privatskolan i Uleåborg</a>
                        </div>
                        <p>Ylioppilas</p>
                    </div>
                    <div className={classes.Logo}>
                        <Spsu/>
                    </div>
                </div>
                <h1>Kurssit</h1>
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.coursesInfoBox}>
                                <h3>Sähkötyöturvallisuuskortti</h3>
                                <p>Myönnetty 11/2018</p>
                                <p>Voimassa 11/2023</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti1/>
                        </div>
                    </div>
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.coursesInfoBox}>
                                <h3>Työturvallisuuskortti</h3>
                                <p>Myönnetty 11/2018</p>
                                <p>Voimassa 11/2023</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti/>
                        </div>
                    </div>
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.educationInfoBox}>
                                <h3>Trukkikortti</h3>
                                <p>Myönnetty 07/2017</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti2/>
                        </div>
                    </div>

            </div>

        );
    }
}

export default EducationPageContainer;