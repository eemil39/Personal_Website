import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './SkillsPageContainer.module.css';
import Norway from '../../Assets/png/001-norway.png'
import England from '../../Assets/png/002-united-kingdom.png';
import Finland from '../../Assets/png/003-finland.png';
import Sweden from '../../Assets/png/004-sweden.png';
import ReactJS from '../../Assets/png/005-physics.png';
import JavaScript from '../../Assets/png/006-javascript.png';
import CSS from '../../Assets/png/007-cascading-style-sheets.png';
import Html5 from '../../Assets/png/008-html5.png';
import Java from '../../Assets/png/009-java.png';
import CLogo from '../../Assets/png/010-c-logo.png';
import MySql from '../../Assets/png/011-mysql.png';
import VisualStudio from '../../Assets/png/012-visual-studio.png';
import excel from '../../Assets/png/013-excel.png';
import Word from '../../Assets/png/014-word.png';



class SkillsPageContainer extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div>
                <h1>{this.props.language === 'Fin' ? 'Kielitaidot' : this.props.language === 'Eng' ? 'Language skills' :this.props.language === 'Swe' ? 'Språkkunskaper ' : 'Kielitaidot' }</h1>
                <div className={classes.skillsInfo}>
                    <div className={classes.skillsInfoIconFlag}>
                            <div className={classes.iconContainer}>
                                <img src={Finland} alt="Finland"></img>       
                                <div className={classes.tag}>➀</div>               
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={England} alt="Enland"></img> 
                                <div className={classes.tag}>➀</div>                     
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={Sweden} alt=""></img>        
                                <div className={classes.tag}>➀</div>              
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={Norway} alt=""></img>        
                                <div className={classes.tag}>➀</div>              
                        </div>                              
                    </div>
                    <div className={classes.skillsInfoBox}>
                        <h5>{this.props.language === 'Fin' ? 'Suomi' : this.props.language === 'Eng' ? 'Finnish' :this.props.language === 'Swe' ? 'Finska' : 'Suomi' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Englanti' : this.props.language === 'Eng' ? 'English' :this.props.language === 'Swe' ? 'Engleska' : 'Englanti' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Ruotsi' : this.props.language === 'Eng' ? 'Swedish' :this.props.language === 'Swe' ? 'Svenska' : 'Ruotsi' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Norja' : this.props.language === 'Eng' ? 'Norwegian' :this.props.language === 'Swe' ? 'Norska' : 'Norja' }</h5>
                    </div>
                    <div className={classes.skillsInfoBox2}>
                        <h5>{this.props.language === 'Fin' ? 'Äidinkieli' : this.props.language === 'Eng' ? 'Native' :this.props.language === 'Swe' ? 'Modersmål' : 'Äidinkieli' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Proficient' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Proficient' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Conversational' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                    </div>
                </div>
                <h1>{this.props.language === 'Fin' ? 'Ohjelmointi taidot' : this.props.language === 'Eng' ? '' :this.props.language === 'Swe' ? ' ' : 'Ohjelmointi taidot' }</h1>
                <div className={classes.skillsInfo}>
                    <div className={classes.skillsInfoTitle}>
                        <div className={classes.skillsInfoIcon}>
                                <div className={classes.iconContainer}>
                                    <img src={ReactJS} alt=""></img>       
                                    <div className={classes.tag}>➀</div>               
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={JavaScript} alt=""></img>    
                                    <div className={classes.tag}>➁</div>                  
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={CSS} alt=""></img>           
                                    <div className={classes.tag}>➂</div>           
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={Html5} alt=""></img>  
                                    <div className={classes.tag}>➁</div>                    
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={Java} alt=""></img> 
                                    <div className={classes.tag}>➁</div>                     
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={CLogo} alt=""></img> 
                                    <div className={classes.tag}>➂</div>                     
                                </div>
                                <div className={classes.iconContainer}>
                                    <img src={MySql} alt=""></img> 
                                    <div className={classes.tag}>➁</div>                     
                                </div>                       
                        </div>
                    </div>
                    <div className={classes.skillsInfoBox}>
                        <h5>React.js</h5>
                        <h5>JavaScript</h5>
                        <h5>CSS</h5>
                        <h5>Html5</h5>
                        <h5>Java</h5>
                        <h5>C</h5>
                        <h5>MySQL</h5>
                    </div>
                    <div className={classes.skillsInfoBox2}>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Beginner' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Beginner' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Perusteet' : this.props.language === 'Eng' ? 'Basics' :this.props.language === 'Swe' ? 'Grunderna ' : 'Kohtalainen' }</h5>
                    </div>
                </div>
                <h1>{this.props.language === 'Fin' ? 'IT-taidot' : this.props.language === 'Eng' ? 'IT skills' :this.props.language === 'Swe' ? '' : 'IT-kunskaper' }</h1>
                <div className={classes.skillsInfo}>
                    <div className={classes.skillsInfoTitle}>
                        <div className={classes.skillsInfoIcon}>
                            <div className={classes.iconContainer}>
                                <img src={VisualStudio} alt=""></img>
                                <div className={classes.tag}>➀</div>                     
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={Word} alt=""></img> 
                                <div className={classes.tag}>➁</div>                   
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={excel} alt=""></img>
                                <div className={classes.tag}>➁</div>                      
                            </div>
                            <div className={classes.iconContainer}>
                                <img src={MySql} alt=""></img>
                                <div className={classes.tag}>➁</div>                   
                            </div>
                        </div>                              
                    </div>
                    <div className={classes.skillsInfoBox}>
                        <h5>Vs code</h5>
                        <h5>Microsoft Word</h5>
                        <h5>Microsoft Excel</h5>
                        <h5>MySQL Workbench</h5>
                        <h5>IntelliJ IDEA</h5>
                        <h5>Eclipse</h5>
                        <h5>Matlab</h5>
                    </div>
                    <div className={classes.skillsInfoBox2}>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Hyvä' : this.props.language === 'Eng' ? 'Good' :this.props.language === 'Swe' ? 'Bra' : 'Hyvä' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Perusteet' : this.props.language === 'Eng' ? 'Basics' :this.props.language === 'Swe' ? 'Grunderna ' : 'Kohtalainen' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Beginner' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Beginner' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                        <h5>{this.props.language === 'Fin' ? 'Kohtalainen' : this.props.language === 'Eng' ? 'Beginner' :this.props.language === 'Swe' ? 'Grundnivå' : 'Kohtalainen' }</h5>
                    </div>
                </div>
                    <div className={classes.referenceLink}> ➀ Icons made by 
                        <a href="https://www.freepik.com" title="Freepik"> Freepik</a> from 
                        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></div>
                    <div className={classes.referenceLink}> ➁ Icons made by 
                        <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from 
                        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </div>
                    <div className={classes.referenceLink}> ➂ Icons made by 
                        <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from 
                        <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
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

export default connect(mapStateToProps, null)(SkillsPageContainer);