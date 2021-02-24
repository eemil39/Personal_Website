import React, { Component} from 'react';
import axios from '../../axios-books';

import { connect } from 'react-redux';
import classes from './BooksContainer.module.css';

import BooksForm from '../Form/BooksForm';


class BooksContainer extends Component{
    
    state = {
        booksArray: null
    }

    componentDidMount () {
        const booksArray = []; 
        axios.get('/books.json')
        .then(res => {
            for (let key in res.data){
                booksArray.push({
                    ...res.data[key],
                    id: key,
                });
            }
        })
        .catch(err => console.log(err));
        this.setState({booksArray: booksArray});
    }
    
    render(){

        let books = (
            <div></div>
        )

         if(this.props.showBooks){

             books = (
                <div className={classes.wrapper}>
                    {this.state.booksArray.map((book, index) =>(
                    <div className={classes.booksContainer}
                    key = {index + Math.random() * 1000}>
                        <div className={classes.booksContainerInfo}>
                            <h2>{book.book.title}</h2>
                            <p>{book.book.author}</p>
                            <p>Julkaisuvuosi {book.book.publisyear}</p>
                            <p>Luettu {book.book.read}</p>
                            <p>"{book.book.comment}"</p>
                        </div>
                        <div className={classes.booksContainerPicture}>
                            <img src={book.image} alt=""></img>
                        </div>
                    </div>
                    ))}
                </div> 
             );
        }  
/* 
          if(this.props.showBooks){ 
            books = (
            <div className={classes.wrapper}>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Tulevaisuuden Lukujärjestys</h2>
                        <p>Perttu Pölönen</p>
                        <p>Julkaisuvuosi 2020</p>
                        <p>Luettu 08.01.2021 </p>
                        <p>
                            "Hyvää podintaa nykymaailman menoista ja tulevaisuuden näkymistä. Kevyttä, helposti luettavaa ja omaksuttavaa tekstiä. Voin suositella lämpimästi."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <Perttu1/>
                    </div>
                </div>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Tulevaisuuden identiteetti</h2>
                        <p>Perttu Pölönen</p>
                        <p>Julkaisuvuosi 2020</p>
                        <p>Luettu 15.01.2021 </p>
                        <p>
                            "Pertun tapa kuvailla ja tulkita ihmisten identiteettejä poikkeaa perinteisestä tavasta. Perinteiseti ihmiset identiofioituvat ammittinsa mukaan, kirjassa
                            Perttu kertoo taitoihin perustuvasta identieetistä, minkä myötä itsekin insipiroiduin keksimään itselleni taitonimikkeitä. Omani ovat kiteyttäjä, komponeeraaja ja soveltaja."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <Perttu2/>
                    </div>
                </div>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Maailma koronan jälkeen</h2>
                        <p>Mikko Heikka ja Vesa Kanniainen</p>
                        <p>Julkaisuvuosi 2021</p>
                        <p>Luettu 29.01.2021 </p>
                        <p>
                            "Ei välttämättä paras lukemani kirja, mutta paljon mielenkiintoisia faktoja joista en aiemmin tiennyt. Kirja oli jotenkin todella raskasta luettavaa ja vaati 
                            täyden keskittymisen, jotta pysyi kärryillä. Maailam koronan jälkeen ei kuvastanut kirjan sisältö lainkaan, kirjassa keskityttiin lähinnä pohtimaan maailman tilannetta ja menoa yleisellä tasolla."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <MaailmaKoronanJalkeen/>
                    </div>
                </div>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Kuinka olla piittaamatta paskaakaan</h2>
                        <p>Mark Manson</p>
                        <p>Julkaisuvuosi 2016</p>
                        <p>Luettu 06.02.2021 </p>
                        <p>
                            "Markilla on aika suorsukainen tapa kertoa asiat, mutta hyvää pohdintaa. Olisi ehkä pitänyt lukea kirja alkuperäisellä kiellä
                            eli englanniksi, sillä käännettynä se tuntui jotenki vaisulta ja tökeröltä."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <Kirja4/>
                    </div>
                </div>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Faktojen maailma</h2>
                        <p>Hans Rosling</p>
                        <p>Julkaisuvuosi 2018</p>
                        <p>Luettu 10.02.2021 </p>
                        <p>
                            "Ei sitä osannu edes kuvitella kuinka väärässä oma maailmankuva olikaan. Todella inspiroiva kirja, jonka luettua katsoo maailmaa taas hieman eri silmin.
                            Mielestäni jokaisen tulisi lukea Hans kyseisen kirjan, sillä aivan kuten Hans Rosling kirjassaan todisti, lähestulkoon kaikilla ihmisillä maailmassa on vanhentunutta
                            tietoa maailmastamme ja sen tilasta."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <Kirja5/>
                    </div>
                </div>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Yksi elämä, yksi planeetta</h2>
                        <p>David Attenborough</p>
                        <p>Julkaisuvuosi 2020</p>
                        <p>Luettu 15.02.2021 </p>
                        <p>
                            "Kirja kertoo karun totuuden planeettamme ja sen luennon tilasta. Kirjassa David on havainnollistanut hyvin sen kuinka maailma on muuttunut yhden 
                            ihmiselämän aikana, sillä kirjassa hän kertoo kuinka hän on nähnyt maailman muuttuvan oman elämänsä aikana. Alussa kirja luo todella dystooppisen 
                            kuvan tulevaisuudestamme, mutta kirjan lopussa valetaan jälleen uskoa tulevaisuuden suhteen."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <Kirja6/>
                    </div>
                </div>
            </div>
        );
        }  */

        return(
            <div>
                {books}
                {this.props.isAuthenticated ? <BooksForm/>: <div></div>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(BooksContainer);