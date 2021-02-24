import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './EducationPageContainer.module.css';
import Uva from '../../Components/Backgrounds/Education/Uva';
import Spsu from '../../Components/Backgrounds/Education/Spsu';
import Jkpr from '../../Components/Backgrounds/Education/Jkpr';
import Ilmsk from '../../Components/Backgrounds/Education/Ilmsk';
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
                {this.props.language === 'Fin' ?  <h1>Koulutus</h1>
                : this.props.language === 'Eng' ? <h1>Education</h1>
                : this.props.language === 'Swe' ? <h1>Utbildning</h1>
                : <h1>Koulutus</h1>}
                
                <div className={classes.educationInfo}>
                    <div className={classes.educationYear}>
                        <h4>09/2018 - 06/2023</h4>
                    </div>
                    <div className={classes.educationInfoBox}>
                        <div className={classes.educationInfoLink}>
                            <a href="https://www.univaasa.fi/fi">{this.props.language === 'Fin' ? 'Vaasa Yliopisto' : this.props.language === 'Eng' ? 'Vaasa University' :this.props.language === 'Swe' ? 'Vaasa Universitet' : 'Vaasa Yliopisto' }</a>
                        </div>
                        {this.props.language === 'Fin' ? <p>Automaatio ja tietotekniikka</p>
                        : this.props.language === 'Eng' ? <p>Automation and information technology</p>
                        : this.props.language === 'Swe' ? <p>Automations ja informationsteknologi</p>
                        : <p>Automaatio ja tietotekniikka</p>}
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
                        <p>{this.props.language === 'Fin' ? 'Ylioppilas' : this.props.language === 'Eng' ? 'High school graduate' :this.props.language === 'Swe' ? 'Student' : 'Ylioppilas' }</p>
                        <p>Myös peruskoulu </p>
                    </div>
                    <div className={classes.Logo}>
                        <Spsu/>
                    </div>
                </div>
                {this.props.language === 'Fin' ?  <h1>Kurssit</h1>
                : this.props.language === 'Eng' ? <h1>Courses</h1>
                : this.props.language === 'Swe' ? <h1>Kurser</h1>
                : <h1>Kurssit</h1>}
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.coursesInfoBox}>
                                <h3>{this.props.language === 'Fin' ? 'Sähkötyöturvallisuuskortti' : this.props.language === 'Eng' ? 'Electrical Work Safety Card' :this.props.language === 'Swe' ? 'Säkerhetskort för elektriskt arbete' : 'Sähkötyöturvallisuuskortti' }</h3>
                                <p>{this.props.language === 'Fin' ? 'Myönnetty 11/2018' : this.props.language === 'Eng' ? 'Issued 11/2018' :this.props.language === 'Swe' ? 'Bekräftad 11/2018' : 'Myönnetty 11/2018' }</p>
                                <p>{this.props.language === 'Fin' ? 'Voimassa 11/2023' : this.props.language === 'Eng' ? 'Expires 11/2023' :this.props.language === 'Swe' ? 'Utgår 11/2023' : 'Voimassa 11/2023' }</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti/>
                        </div>
                    </div>
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.coursesInfoBox}>
                                <h3>{this.props.language === 'Fin' ? 'Työturvallisuuskortti' : this.props.language === 'Eng' ? 'Occupational safety card' :this.props.language === 'Swe' ? 'Arbetssäkerhetskort' : 'Työturvallisuuskortti' }</h3>
                                <p>{this.props.language === 'Fin' ? 'Myönnetty 11/2018' : this.props.language === 'Eng' ? 'Issued 11/2018' :this.props.language === 'Swe' ? 'Bekräftad 11/2018' : 'Myönnetty 11/2018' }</p>
                                <p>{this.props.language === 'Fin' ? 'Voimassa 11/2023' : this.props.language === 'Eng' ? 'Expires 11/2023' :this.props.language === 'Swe' ? 'Utgår 11/2023' : 'Voimassa 11/2023' }</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti1/>
                        </div>
                    </div>
                    <div className={classes.coursesInfo}>
                        <div></div>
                        <div className={classes.coursesInfoBox}>
                            <div className={classes.educationInfoBox}>
                                <h3>{this.props.language === 'Fin' ? 'Trukkikortti' : this.props.language === 'Eng' ? 'Truck Card' :this.props.language === 'Swe' ? 'Truckkort' : 'Trukkikortti' }</h3>
                                <p>{this.props.language === 'Fin' ? 'Myönnetty 07/2017' : this.props.language === 'Eng' ? 'Issued 07/2017' :this.props.language === 'Swe' ? 'Bekräftad 07/2017' : 'Myönnetty 07/2017' }</p>
                            </div>
                        </div>
                        <div className={classes.Logo}>
                            <Kortti2/>
                        </div>
                    </div>
                <h1>{this.props.language === 'Fin' ? 'Varusmiespalvelu' : this.props.language === 'Eng' ? 'Conscript Service' :this.props.language === 'Swe' ? 'Beväringstjänst' : 'Varusmiespalvelu' }</h1>
                <div className={classes.educationInfo}>
                    <div className={classes.educationYear}>
                        <h4>01/2017 - 03/2017</h4>
                    </div>
                    <div className={classes.educationInfoBox}>
                        <div className={classes.educationInfoLink}>
                            {this.props.language === 'Fin' ?  <a href="https://maavoimat.fi/jaakariprikaati">Rovaniemen Jääkäriprikaatti</a>
                            : this.props.language === 'Eng' ? <a href="https://maavoimat.fi/sv/jagarbrigaden">Rovaniemi Jägarbrigaden</a>
                            : this.props.language === 'Swe' ? <a href="https://maavoimat.fi/en/jaeger-brigade">Rovaniemi Jaeger Brigade</a>
                            : <a href="https://maavoimat.fi/jaakariprikaati">Rovaniemen Jääkäriprikaatti</a>}
                           
                        </div>
                        <p>{this.props.language === 'Fin' ? 'Peruskoulutuskausi' : this.props.language === 'Eng' ? 'Basic training season' :this.props.language === 'Swe' ? 'Grundutbildningen ' : 'Peruskoulutuskausi' }</p>
                    </div>
                    <div className={classes.Logo}>
                        <Jkpr/>
                    </div>
                </div>
                <div className={classes.educationInfo}>
                    <div className={classes.educationYear}>
                        <h4>03/2017 - 12/2017</h4>
                    </div>
                    <div className={classes.educationInfoBox}>
                        <div className={classes.educationInfoLink}>
                            {this.props.language === 'Fin' ?  <a href="https://ilmavoimat.fi/ilmasotakoulu">Tikkakosken Ilmasotakoulu</a>
                            : this.props.language === 'Eng' ? <a href="https://ilmavoimat.fi/en/air-force-academy">Tikkakoski Luftkrigsskolans </a>
                            : this.props.language === 'Swe' ? <a href="https://www.spsu.fi/">Tikkakoski Air Force Academy</a>
                            : <a href="https://ilmavoimat.fi/ilmasotakoulu">Tikkakosken Ilmasotakoulu</a>}
                        </div>
                        <p>{this.props.language === 'Fin' ? 'Lentotekninen aliupseerikurssi' : this.props.language === 'Eng' ? 'Flight technical Reserve Non-Commissioned Officer training' :this.props.language === 'Swe' ? 'Flygteknisk underofficerskurs' : 'Lentotekninen aliupseerikurssi' }</p>
                        <p>{this.props.language === 'Fin' ? 'Apumekaanikko' : this.props.language === 'Eng' ? 'Assistant mechanic' :this.props.language === 'Swe' ? 'Hjälp mekaniker' : 'Apumekaanikko' }</p>
                    </div>
                    <div className={classes.Logo}>
                        <Ilmsk/>
                    </div>
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

export default connect(mapStateToProps, null)(EducationPageContainer);