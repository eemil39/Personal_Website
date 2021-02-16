import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './ProjectsPageContainer.module.css';
import Project1 from '../../Assets/Images/VScode.jpg';
import Project2 from '../../Assets/Images/VScode2.jpg';
import Hitler from '../../Assets/Images/Hitler.JPG';
import Bussikuski2 from '../../Assets/Images/Bussikuski2.JPG';
import Bussikuski3 from '../../Assets/Images/Bussikuski3.JPG';

class ProjectsPageContainer extends Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        return(
            <div>
                <h1>{this.props.language === 'Fin' ? 'Projektit' : this.props.language === 'Eng' ? 'Projects' : this.props.language === 'Swe' ? 'Projekt': 'Projektit'}</h1>
                
                <div className={classes.BoxContainer}>
                    <div className={classes.InfoBox}>
                        <h2>{this.props.language === 'Fin' ? 'Tämä sivusto' : this.props.language === 'Eng' ? 'This page' : this.props.language === 'Swe' ? 'Denna sajt': 'Tämä sivusto'}</h2>
                        
                        {this.props.language === 'Fin'?      
                        <p>
                            <span className={classes.firstLetter}>P</span>äätin tehdä itselleni nettisivut, jotta voin julkaista tänne kaikkea minkä koen tarpeelliseksi.
                            Mieluisinta omassa nettisivusssa on se, että voin tehdä siitä juuri sen näköisen kun itse haluan. Tämä on myös haastavin osuus, sillä aina kun 
                            sivustolle lisää jotain uutta, joutuu pohtimaan miten sen asettelee sivustolle tavalla, mikä miellyttä omaa silmää. Olen huomannut tätä sivustoa 
                            ohjelmoidessa, että tykkään jopa hieman tästä "graaffisesta suunnittelusta". 
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            <span className={classes.firstLetter}>P</span>äätin tehdä itselleni nettisivut, jotta voin julkaista tänne kaikkea minkä koen tarpeelliseksi.
                            Mieluisinta omassa nettisivusssa on se, että voin tehdä siitä juuri sen näköisen kun itse haluan. Tämä on myös haastavin osuus, sillä aina kun 
                            sivustolle lisää jotain uutta, joutuu pohtimaan miten sen asettelee sivustolle tavalla, mikä miellyttä omaa silmää. Olen huomannut tätä sivustoa 
                            ohjelmoidessa, että tykkään jopa hieman tästä "graaffisesta suunnittelusta". 
                        </p>}
                        {this.props.language === 'Fin'?      
                        <p>
                            Tämän sivuston frontend on toteutettu täysin Reactilla ja backendinä toimii googlen firebase. Tällä hetkellä voin itse kirjautua sisään sivustolle 
                            "/admin" välilehdellä. Tarkoituksenani on toteuttaa ominaisuudet, joiden avulla voin lisätä asioita kuten kirjoja ja projkteja kirjautumalla sisään. Sivuston kehittäminen tulee
                            mitä todennäköisimmin jatkumaan hamaan tulevaisuuteen.  
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Tämän sivuston frontend on toteutettu täysin Reactilla ja backendinä toimii googlen firebase. Tällä hetkellä voin itse kirjautua sisään sivustolle 
                            "/admin" välilehdellä. Tarkoituksenani on toteuttaa ominaisuudet, joiden avulla voin lisätä asioita kuten kirjoja ja projkteja kirjautumalla sisään. Sivuston kehittäminen tulee
                            mitä todennäköisimmin jatkumaan hamaan tulevaisuuteen. 
                        </p>}
                        {this.props.language === 'Fin'?      
                        <p>
                            Täytyy mainita vielä erikseen, että kaikki kuvat mitä on käytetty tällä sivulla on minun tekemiäni tai ottamia, lukuuottamatta tietenkää yrityksien 
                            logoja. Voit käydä katsomaassa tämän sivuston "konepellin" alle github repostoryssä, mikä on julkinen.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Täytyy mainita vielä erikseen, että kaikki kuvat mitä on käytetty tällä sivulla on minun tekemiäni tai ottamia, lukuuottamatta tietenkää yrityksien 
                            logoja. Voit käydä katsomaassa tämän sivuston "konepellin" alle github repostoryssä, mikä on julkinen.
                        </p>}
                        {this.props.language === 'Fin'?      
                        <p>
                            Sivuston github repository <a href="https://github.com/eemil39/Personal_Website">github.com</a>.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Sivuston github repository <a href="https://github.com/eemil39/Personal_Website">github.com</a>.
                        </p>}
    
                            <img src={Project1} alt=""/>

                    </div>
                </div>
                <div className={classes.separatorLine}></div>
                <div className={classes.BoxContainer}>
                    <div className={classes.InfoBox}>
                        <h2>{this.props.language === 'Fin' ? 'Juomapeli sivusto' : this.props.language === 'Eng' ? 'Drinking game page' : this.props.language === 'Swe' ? 'Dricksspel sajt': 'Juomapeli sivusto'}</h2>

                        {this.props.language === 'Fin'?      
                        <p>
                            <span className={classes.firstLetter}>O</span>len jostain syystä pitempään halunnut ohjemloida jonkun sovelluksen, missä käsitellään pelikortteja.
                            Kun aloin hahmotella kortti pakkaa reactilla sain idean koodata pari eriä juomapeliä, mitä voisi sitten pelailla opiskelukavereiden kanssa illanistujaisissa.
                            Olen ihan tyytyväinen aikaansaannokseeni, pelit toimivat moitteettomasti ja olen päässyt testaamaan pelejä ihan käytännön tasolla uutenavuotena. Sivusto tai sovellus 
                            ei missään nimessä ole julkaisu kelpoista tavaraa. Enisnnäkään minulla ei ole oikeuksi mihinkään kuvamateriaaliin, mitä olen käyttäny saatikaan ääni efekteihin. Toiseksi
                            sivustoa ei ole lainkaan ohjelmoitu mobiilaitteen näytölle sopivaksi. Testauksesta puhumattakaan.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                             <span className={classes.firstLetter}>O</span>len jostain syystä pitempään halunnut ohjemloida jonkun sovelluksen, missä käsitellään pelikortteja.
                            Kun aloin hahmotella kortti pakkaa reactilla sain idean koodata pari eriä juomapeliä, mitä voisi sitten pelailla opiskelukavereiden kanssa illanistujaisissa.
                            Olen ihan tyytyväinen aikaansaannokseeni, pelit toimivat moitteettomasti ja olen päässyt testaamaan pelejä ihan käytännön tasolla uutenavuotena. Sivusto tai sovellus 
                            ei missään nimessä ole julkaisu kelpoista tavaraa. Enisnnäkään minulla ei ole oikeuksi mihinkään kuvamateriaaliin, mitä olen käyttäny saatikaan ääni efekteihin. Toiseksi
                            sivustoa ei ole lainkaan ohjelmoitu mobiilaitteen näytölle sopivaksi. Testauksesta puhumattakaan.
                        </p>}
                        {this.props.language === 'Fin'?      
                        <p>
                            Sivuston tarkoitus on kuitenkin lähinnä kehittää omia ohjelmointi taitojani ja parhaassa tapauksessa tuottaa samalla iloa itselleni ja kavereilleni. Jos sinua 
                            kiinnostaa sivuston toteutustapa voit käydä tutustumassa lähdekoodiin github repostoryssä. 
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Sivuston tarkoitus on kuitenkin lähinnä kehittää omia ohjelmointi taitojani ja parhaassa tapauksessa tuottaa samalla iloa itselleni ja kavereilleni. Jos sinua 
                            kiinnostaa sivuston toteutustapa voit käydä tutustumassa lähdekoodiin github repostoryssä. 
                        </p>}
                        {this.props.language === 'Fin'?      
                        <p>
                            Sivuston github repository <a href="https://github.com/eemil39/juomapeli_sivusto">github.com</a>.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Sivuston github repository <a href="https://github.com/eemil39/juomapeli_sivusto">github.com</a>.
                        </p>}
    
                            <img src={Project2} alt=""/>
                            <img src={Hitler} alt=""/>
                        
                        {this.props.language === 'Fin'?      
                        <p>
                            Ylläolvessa kuvassa näkyy "hitler" juomapeli, missä kukin pelaaja nostaa vuorollaan kortin ja suorittaa oikealla näkyvän tehtävän.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                            Ylläolvessa kuvassa näkyy "hitler" juomapeli, missä kukin pelaaja nostaa vuorollaan kortin ja suorittaa oikealla näkyvän tehtävän.
                        </p>}
        
                            <img src={Bussikuski3} alt=""/>

                        {this.props.language === 'Fin'?      
                        <p>
                            Ylläolvessa kuvassa näkyy "bussikusi" juomapeli.
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                           Ylläolvessa kuvassa näkyy "bussikusi" juomapeli.
                        </p>}
              
                            <img src={Bussikuski2} alt=""/>
                        
                        {this.props.language === 'Fin'?      
                        <p>
                            Ylläolvessa kuvassa näkyy "bussikusi" juomapelin bussikuski kierros. Tässä pelin e-versio osottutuu ylivoimaiseki verrattuna oikeilla korteilla pelattuun, 
                            sillä pelaaja voi pelata kierroksia todella nopeaan tahtiin, eikä kortteja tarvitse jakaa uudestaan jokaisen kierroksen jälkeen, sillä tietokone tekee sen puolestasi. 
                        </p>
                        :this.props.language === 'Eng'?      
                        <p>
                            
                        </p>
                        :this.props.language === 'Swe'?      
                        <p>
                           
                        </p>
                        :      
                        <p>
                           Ylläolvessa kuvassa näkyy "bussikusi" juomapelin bussikuski kierros. Tässä pelin e-versio osottutuu ylivoimaiseki verrattuna oikeilla korteilla pelattuun, 
                            sillä pelaaja voi pelata kierroksia todella nopeaan tahtiin, eikä kortteja tarvitse jakaa uudestaan jokaisen kierroksen jälkeen, sillä tietokone tekee sen puolestasi. 
                        </p>}
  

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

export default connect(mapStateToProps, null)(ProjectsPageContainer);