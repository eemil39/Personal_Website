import React, { Component } from 'react';

import classes from './HobbiesPageContainer.module.css';
import NavButton from '../../UI/Buttons/NavigationButton'; 
import Books2 from '../../Components/Backgrounds/Education/Books3';
import Ohjelmointi from '../../Components/Backgrounds/Education/Ohelmointi';
import Button from '../../UI/Buttons/Button';
import BooksContainer from '../../Components/BooksContainer/BooksContainer';
import Shakki from '../../Components/Backgrounds/Education/Shakki';
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
                <h1>Harrastukset</h1>
                <div className={classes.hobbiesInfo}>
                    <div className={classes.hobbiesInfoBox}>
                        <h3>Ohjelmointi projektit</h3>
                            <p>
                                Koen ainaki vielä toistaiseksi, että ohjelmointi on minulle harrastus, sillä ohjelmoin vapaa-ajalla enkä myöskään tee sitä työkseni.
                                Tällä hetkellä olen pääasiassa kesittynyt tämän sivuston kehittämiseen, muiden projektien ohella. Voit lukea lisää muista projekteistani
                                suunnistamalla "Projektit" välilehdelle.
                            </p>
                        <div className={classes.Button}>
                            <NavButton link="/projects">Projektit</NavButton>
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
                        <h3>Kuntosali</h3>
                            <p>
                                Tärkein harrastukseni on kuntosalilla käyminen, sillä se parantaa ja ylläpitää sekä henkistä että fyysistä hyvinvointiani.
                                Etenkin nyt kun liikuntaa ei tule työn myötä yhtäpaljon kuin ennen, koen kuntosalilla käymisen entistä tärkeämmäksi. 
                            </p>
                    </div>
                </div>
                <div className={classes.hobbiesInfo3}>
                    <div className={classes.hobbiesInfoBox}>
                        <h3>Lukeminen</h3>
                            <p>
                                Tuoreimpia harrastuksiani on lukeminen. Lisäsin tänne listan, minne lisään kaikki tänä vuonna lukemani kirjat.
                                Luen pääasiassa tietokirjoja, mutta pyrin myös lukemaan kaunokirjallisuutta, sillä uskon sen parantavan
                                mielikuvitusta ja luovuutta.
                            </p>
                    <div className={classes.Button}>
                        <Button click={this.showBooks}>{buttonContent}</Button>
                    </div>
                    </div>
                    <div className={classes.hobbiesInfoPic}>
                        <Books2/>
                    </div>
                </div>
                <BooksContainer
                showBooks={this.state.showBooks}/>
                <div className={classes.hotNowBox}>
                <h2>Muut tämänhetkiset kiinnostuksen kohteet</h2>
                <div className={classes.hobbiesInfo4}>
                    <div className={classes.hobbiesInfoPic}>
                        <Shakki/>
                    </div>
                    <div className={classes.hobbiesInfoBox}>
                        <h3>Shakki</h3>
                        <p>
                                
                        </p>
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}

export default HobbiesPageContainer;