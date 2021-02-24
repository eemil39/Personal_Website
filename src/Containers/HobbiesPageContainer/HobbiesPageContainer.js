import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './HobbiesPageContainer.module.css';
import NavButton from '../../UI/Buttons/NavigationButton'; 
import Books2 from '../../Components/Backgrounds/Education/Books3';
import Ohjelmointi from '../../Components/Backgrounds/Education/Ohelmointi';
import Button from '../../UI/Buttons/Button';
import BooksContainer from '../../Components/BooksContainer/BooksContainer';
import Shakki from '../../Components/Backgrounds/Education/Shakki';
import Blockchain from '../../Components/Backgrounds/Education/Blockchain';
import Sali from '../../Components/Backgrounds/Education/Sali';

class HobbiesPageContainer extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    
    state = {
        showBooks: false,
    }

    showBooks = () => {
        this.state.showBooks ? this.setState({showBooks: false}) : this.setState({showBooks: true})
    }

    render() {

        let buttonContent = '';
        if(this.state.showBooks === false) {
            buttonContent = 'Näytä kirjat';
        } else {
            buttonContent = 'Piilota kirjat';
        }


        return(
            <div>
                <h1>{this.props.language === 'Fin' ? 'Harrastukset' : this.props.language === 'Eng' ? 'Hobbies' :this.props.language === 'Swe' ? 'Fritidsintressen' : 'Harrastukset' }</h1>
                <div className={classes.hobbiesInfo}>
                    <div className={classes.hobbiesInfoBox}>
                        <h3>{this.props.language === 'Fin' ? 'Ohjelmointi' : this.props.language === 'Eng' ? 'Programming' :this.props.language === 'Swe' ? 'Programmering' : 'Ohjelmointi' }</h3>

                            {this.props.language === 'Fin' ?      
                            <p>
                                Koen ainaki vielä toistaiseksi, että ohjelmointi on minulle harrastus, sillä ohjelmoin vapaa-ajalla enkä myöskään tee sitä työkseni.
                                Tällä hetkellä olen pääasiassa kesittynyt tämän sivuston kehittämiseen, muiden projektien ohella. Voit lukea lisää muista projekteistani
                                suunnistamalla "Projektit" välilehdelle.
                            </p>
                            : this.props.language === 'Eng' ?     
                            <p>
                               
                            </p>
                            : this.props.language === 'Swe' ?     
                            <p>
                                
                            </p>
                            :    
                            <p>
                                Koen ainaki vielä toistaiseksi, että ohjelmointi on minulle harrastus, sillä ohjelmoin vapaa-ajalla enkä myöskään tee sitä työkseni.
                                Tällä hetkellä olen pääasiassa kesittynyt tämän sivuston kehittämiseen, muiden projektien ohella. Voit lukea lisää muista projekteistani
                                suunnistamalla "Projektit" välilehdelle.
                            </p>}

                        <div className={classes.Button}>
                            <NavButton link="/projects">{this.props.language === 'Fin' ? 'Projektit' : this.props.language === 'Eng' ? 'Projects' :this.props.language === 'Swe' ? 'Projekt' : 'Projektit' }</NavButton>
                        </div>
                    </div>
                    <div className={classes.hobbiesInfoPic}>
                        <Ohjelmointi/>
                    </div>
                </div>
                <div className={classes.hobbiesInfo2}>
                    <div className={classes.hobbiesInfoPic}>
                        <Sali/>
                    </div>
                    <div className={classes.hobbiesInfoBox}>
                        <h3> {this.props.language === 'Fin' ? 'Kuntosali' : this.props.language === 'Eng' ? 'Gym' :this.props.language === 'Swe' ? 'Gym' : 'Kuntosali' }</h3>

                            {this.props.language === 'Fin' ?      
                            <p>
                                Tärkein harrastukseni on kuntosalilla käyminen, sillä se parantaa ja ylläpitää sekä henkistä että fyysistä hyvinvointiani.
                                Etenkin nyt kun liikuntaa ei tule työn myötä yhtäpaljon kuin ennen, koen kuntosalilla käymisen entistä tärkeämmäksi. En ole omaksunut tavoitteellista
                                treenaamista, minulle riittää, että tulee hyvä mieli ja olo treenin jälkeen.
                            </p>
                            : this.props.language === 'Eng' ?     
                            <p>
                                
                            </p>
                            : this.props.language === 'Swe' ?     
                            <p>
                                
                            </p>
                            :    
                            <p>
                                Tärkein harrastukseni on kuntosalilla käyminen, sillä se parantaa ja ylläpitää sekä henkistä että fyysistä hyvinvointiani.
                                Etenkin nyt kun liikuntaa ei tule työn myötä yhtäpaljon kuin ennen, koen kuntosalilla käymisen entistä tärkeämmäksi. En ole omaksunut tavoitteellista
                                treenaamista, minulle riittää, että tulee hyvä mieli ja olo treenin jälkeen.
                            </p>}
                    </div>
                </div>
                <div className={classes.hobbiesInfo3}>
                    <div className={classes.hobbiesInfoBox}>
                        <h3>{this.props.language === 'Fin' ? 'Lukeminen' : this.props.language === 'Eng' ? 'Reading' :this.props.language === 'Swe' ? 'Läsning' : 'Lukeminen' }</h3>
                            
                            {this.props.language === 'Fin' ?      
                            <p>
                                Tuoreimpia harrastuksiani on lukeminen. Lisäsin tänne listan, minne lisään kaikki tänä vuonna lukemani kirjat.
                                Luen pääasiassa tietokirjoja, mutta pyrin myös lukemaan kaunokirjallisuutta, terveen vaihtelun vuoksi. Tavoitteeni on lukea vähintää kirja viikossa tämän vuoden ajan.
                            </p>
                            : this.props.language === 'Eng' ?     
                            <p>
                               
                            </p>
                            : this.props.language === 'Swe' ?     
                            <p>
                               
                            </p>
                            :    
                            <p>
                                Tuoreimpia harrastuksiani on lukeminen. Lisäsin tänne listan, minne lisään kaikki tänä vuonna lukemani kirjat.
                                Luen pääasiassa tietokirjoja, mutta pyrin myös lukemaan kaunokirjallisuutta, terveen vaihtelun vuoksi. Tavoitteeni on lukea vähintää kirja viikossa tämän vuoden ajan.
                            </p>}
    
                    <div className={classes.Button}>
                        <Button click={this.showBooks}>{buttonContent}</Button>
                    </div>
                    </div>
                    <div className={classes.hobbiesInfoPic}>
                        <Books2/>
                    </div>
                </div>

                <BooksContainer showBooks={this.state.showBooks}/>

                <div className={classes.hotNowBox}>
                    <h2>{this.props.language === 'Fin' ? 'Muut tämänhetkiset kiinnostuksen kohteet' : this.props.language === 'Eng' ? 'Other interest' :this.props.language === 'Swe' ? 'Andra intressen' : 'Muut tämänhetkiset kiinnostuksen kohteet' }</h2>
                    <div className={classes.hobbiesInfo4}>
                        <div className={classes.hobbiesInfoPic}>
                            <Shakki/>
                        </div>
                        <div className={classes.hobbiesInfoBox}>
                            <h3>{this.props.language === 'Fin' ? 'Shakki' : this.props.language === 'Eng' ? 'Chess' :this.props.language === 'Swe' ? 'Schack' : 'Shakki' }</h3>
                                
                                {this.props.language === 'Fin' ?      
                                <p>
                                    Mielenkiintoinen peli jota tulee pelattua aina silloin tällöin. Pelaamiseen ei tarvitse edes pelikaveria, sillä chess.com
                                    sovellus on erittäin suosittu ja vastustajien kirjo on loputon. 
                                </p>
                                : this.props.language === 'Eng' ?     
                                <p>
                                    
                                </p>
                                : this.props.language === 'Swe' ?     
                                <p>
                                    
                                </p>
                                :    
                                <p>
                                    Mielenkiintoinen peli jota tulee pelattua aina silloin tällöin. Pelaamiseen ei tarvitse edes pelikaveria, sillä chess.com
                                    sovellus on erittäin suosittu ja vastustajien kirjo on loputon.
                                </p>}
                        </div>
                    </div>
                    <div className={classes.hobbiesInfo4}>
                        <div className={classes.hobbiesInfoPic}>
                            <Blockchain/>
                        </div>
                        <div className={classes.hobbiesInfoBox}>
                            <h3>{this.props.language === 'Fin' ? 'Lohkoketju teknologia' : this.props.language === 'Eng' ? 'Chainblock technology' :this.props.language === 'Swe' ? 'Blockkedja teknologi' : 'Lohkoketjut' }</h3>
                                
                                {this.props.language === 'Fin' ?      
                                <p>
                                    Mielenkiintoinen teknologia, jolla on paljon potentiaalia. 
                                </p>
                                : this.props.language === 'Eng' ?     
                                <p>
                                    
                                </p>
                                : this.props.language === 'Swe' ?     
                                <p>
                                    
                                </p>
                                :    
                                <p>
                                    Mielenkiintoinen peli jota tulee pelattua aina silloin tällöin. Pelaamiseen ei tarvitse edes pelikaveria, sillä chess.com
                                    sovellus on erittäin suosittu ja vastustajien kirjo on loputon.
                                </p>}
                        </div>
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

export default connect(mapStateToProps, null)(HobbiesPageContainer);