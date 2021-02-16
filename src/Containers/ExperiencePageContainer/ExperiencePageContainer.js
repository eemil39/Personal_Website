import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ExperiencePageContainer.module.css';
import Eura from '../../Components/Backgrounds/Experiece/Eura';
import Tampere from '../../Components/Backgrounds/Experiece/Tampere';
import Kempele from '../../Components/Backgrounds/Experiece/Kempele';
import Notfound from '../../Components/Backgrounds/Experiece/Notfound';
import AvantLogo from '../../Components/Backgrounds/Experiece/AvantLogo';

class ExperiencePageContainer extends Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div className={classes.container}>
                <h1> {this.props.language === 'Fin' ? 'Työkokemus' : this.props.language === 'Eng' ? 'Experience' :this.props.language === 'Swe' ? 'Arbetserfarenhet' : 'Työkokemus' }</h1>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                        <div className={classes.experienceInfoLink}>
                            <AvantLogo/>
                        </div>
                        <h4>04/2020 - 09/2020</h4>
                        <p>{this.props.language === 'Fin' ? 'Timpuri' : this.props.language === 'Eng' ? 'Carpenter' :this.props.language === 'Swe' ? 'Timmerman' : 'Timpuri' }</p>
                        
                        {this.props.language === 'Fin' ? 
                            <p>
                                Kesällä 2020 tein töitä pääasiassa Kempeleessä ja Eurassa. Kempeleen halli kohteessa rakensin yksin toimisto-osuuden levypintaan asti. Eurassa johdin 
                                mm. kuvassa näkyvän katon asennuksen. Tuottelias kesä ettenkö sanoisi. 
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                                
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                
                            </p>
                        :   
                            <p>
                                Kesällä 2020 tein töitä pääasiassa Kempeleessä ja Eurassa. Kempeleen halli kohteessa rakensin yksin toimisto-osuuden levypintaan asti. Eurassa johdin 
                                mm. kuvassa näkyvän katon asennuksen. Tuottelias kesä ettenkö sanoisi. 
                            </p>}
        
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
                        <h4>05/2019 - 09/2019</h4>
                        <p>{this.props.language === 'Fin' ? 'Timpuri' : this.props.language === 'Eng' ? 'Carpenter' :this.props.language === 'Swe' ? 'Timmerman' : 'Timpuri' }</p>
                        
                        {this.props.language === 'Fin' ? 
                            <p>
                                Kesällä 2019 olin töissä Espoossa ja Raahessa. Raahessa työsekentelin omakotitalo työmaalla ja Espoossa useamman kohteen omakotialotyömaalla. Työtehtäviin
                                kuului kaikki mitä timpuri omakotitalotyömaalla tekee.
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                                
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                
                            </p>
                        :   
                            <p>
                                 Kesällä 2019 olin töissä Espoossa ja Raahessa. Raahessa työsekentelin omakotitalo työmaalla ja Espoossa useamman kohteen omakotialotyömaalla. Työtehtäviin
                                kuului kaikki mitä timpuri omakotitalotyömaalla tekee.
                            </p>}
           
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
                        <h4>01/2018 - 09/2018</h4>
                        <p>{this.props.language === 'Fin' ? 'Timpuri' : this.props.language === 'Eng' ? 'Carpenter' :this.props.language === 'Swe' ? 'Timmerman' : 'Timpuri' }</p>
                        {this.props.language === 'Fin' ? 
                            <p>
                                Vuonna 2018 armeijan jälkeen työskentelin 9 kuukautta opiskelujen aloitus ajankohtaan asti. Työskentelin pääasiassa Tampereella oikeanpuoleisessa kuvassa
                                näkyvässä kohteessa. Työtethäviini kuului tuolloin mm. väliseinien levytys ja kaikki muut työtehtävät joihin kykenin. 
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                               
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                
                            </p>
                        :   
                            <p>
                               Vuonna 2018 armeijan jälkeen työskentelin 9 kuukautta opiskelujen aloitus ajankohtaan asti. Työskentelin pääasiassa Tampereella oikeanpuoleisessa kuvassa
                                näkyvässä kohteessa. Työtethäviini kuului tuolloin mm. väliseinien levytys ja kaikki muut työtehtävät joihin kykenin. 
                            </p>}

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
                        <p>{this.props.language === 'Fin' ? 'Aloitteleva työntekija' : this.props.language === 'Eng' ? 'Trainee' :this.props.language === 'Swe' ? 'Trainee' : 'Aloitteleva työntekija' }</p>
                        
                        {this.props.language === 'Fin' ? 
                            <p>
                                Vuonna 2016 aloitin esimmäistä kertaa työsekentelyn Rakennus Avantilla lukion jälkeen. Tuolloin minulla oli yhden kesän kokemus raksalta, joten 
                                työtehtäväni kuului lähinnä maalaamista ja muita vastaavista työtehtäviä. Täytynee kuitenkin erikseen mainita, että sain näppärä sormisena kaverina listoittaa silloisen 
                                Nurmeksessa sijaitsevan kohteen toimistotilat.
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                              
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                
                            </p>
                        :   
                            <p>
                                Vuonna 2016 aloitin esimmäistä kertaa työsekentelyn Rakennus Avantilla lukion jälkeen. Tuolloin minulla oli yhden kesän kokemus raksalta, joten 
                                työtehtäväni kuului lähinnä maalaamista ja muita vastaavista työtehtäviä. Täytynee kuitenkin erikseen mainita, että sain näppärä sormisena kaverina listoittaa silloisen 
                                Nurmeksessa sijaitsevan kohteen toimistotilat.
                            </p>}

                        <div className={classes.experienceInfoLink2}>
                            <a href="https://rakennusavant.fi/">rakennusavant.fi</a>
                        </div>
                    </div>
                    <div className={classes.experiencePicture}>
                        <Notfound/>
                    </div>
                </div>
                <div className={classes.experienceInfo}>
                    <div className={classes.experienceInfoBox}>
                            <h3>Rakennsupalvelu Sakari Vähä</h3>
                        <h4>05/2015 - 09/2015</h4>
                        <p>{this.props.language === 'Fin' ? 'Lautapoika' : this.props.language === 'Eng' ? 'Trainee' :this.props.language === 'Swe' ? 'Trainee' : 'Aloitteleva työntekija' }</p>
                        
                        {this.props.language === 'Fin' ? 
                            <p>
                                Ensimmäinen kesäni töissä kokopäiväsisenä työntekijänä. Toimin lähinnä apulaisena työmaalla ja suoritin työtehtäviä, jotka vastasivat osaamistasoani.
                                Tästä kesästä alkoi näihin päiviin asti kestänyt urani eri työmailla.
                            </p>
                        : this.props.language === 'Eng' ?    
                            <p>
                               
                            </p>
                        : this.props.language === 'Swe' ?    
                            <p>
                                 
                            </p>
                        :   
                            <p>
                                Ensimmäinen kesäni töissä kokopäiväsisenä. Toimin lähinnä apulaisena työmaalla ja suoritin työtehtäviä, jotka vastasivat osaamistasoani.
                                Tästä kesästä alkoi näihin päiviin asti kestänyt urani eri työmailla.
                            </p>}

                    </div>
                    <div className={classes.experiencePicture}>
                        <Notfound/>
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

export default connect(mapStateToProps, null)(ExperiencePageContainer);