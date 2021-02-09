import React, { Component} from 'react';
import axios from '../../axios-books';

import { connect } from 'react-redux';
import classes from './BooksContainer.module.css';
import Perttu1 from '../Backgrounds/Books/Perttu1';
import Perttu2 from '../Backgrounds/Books/Perttu2';
import MaailmaKoronanJalkeen from '../Backgrounds/Books/MaailmaKoronanJalkeen';

import BooksForm from '../Form/BooksForm';


class BooksContainer extends Component{
    
    state = {
        booksArray: null,
        books: {
            book1: {
                title: 'Tulevaisuuden Lukujärjestys',
                author: 'Perttu Pölönen',
                year: '2020',
                read: '08.01.2021',
                comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.'
            },
            book2: {
                title: 'Tulevaisuuden Lukujärjestys',
                author: 'Perttu Pölönen',
                year: '2020',
                read: '08.01.2021',
                comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC making it over 2000 years old.'
            }
            
        }
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
        console.log(booksArray)
        console.log(booksArray)
        this.setState({booksArray: booksArray});

    }
    
    render(){

        let books = (
            <div></div>
        )

        if(this.props.showBooks){

             books = (
                <div className={classes.wrapper}>
                    {this.state.booksArray.map(book =>(
                    <div className={classes.booksContainer}>
                        <div className={classes.booksContainerInfo}>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.publisyear}</p>
                            <p>{book.read}</p>
                            <p>{book.comment}</p>
                        </div>
                        <div className={classes.booksContainerPicture}>
                        <Perttu1/>
                        </div>
                    </div>
                    ))}
                </div> 
             );
        }

       /*  if(this.props.showBooks){ 
            books = (
            <div className={classes.wrapper}>
                <div className={classes.booksContainer}>
                    <div className={classes.booksContainerInfo}>
                        <h2>Tulevaisuuden Lukujärjestys</h2>
                        <p>Perttu Pölönen</p>
                        <p>Julkaisuvuosi 2020</p>
                        <p>Luettu 08.01.2021 </p>
                        <p>
                            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                            from 45 BC, making it over 2000 years old."
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
                            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                            from 45 BC, making it over 2000 years old."
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
                            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                            from 45 BC, making it over 2000 years old."
                        </p>
                    </div>
                    <div className={classes.booksContainerPicture}>
                        <MaailmaKoronanJalkeen/>
                    </div>
                </div>
            </div>
        );
        } */

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