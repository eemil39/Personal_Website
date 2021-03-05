import React, { Component} from 'react';
import axios from '../../axios-books';

import { connect } from 'react-redux';
import classes from './BooksContainer.module.css';
import editIcon from '../../Assets/png/edit.png';
import EditButton from '../../UI/Buttons/EditButton';
import EditBook from './EditBook';
import Backdrop from '../../UI/Backdrop/Backdrop';


class BooksContainerEditable extends Component{
    
    state = {
        booksArray: null,
        showEditBook: false,
        book: null,
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

    editBook = (index) => {  
        const book = {
            ...this.state.booksArray[index]
        }
        this.setState({book: book});
        console.log(this.state.book);
        console.log(book.book.author)
        this.setState({showEditBook: true});
    }
    showBooks = () => {
        this.setState({showEditBook: true})
    }
    closeEditBook = () =>{
        this.setState({showEditBook: false});
    }
    
    render(){

        let books = <div></div>;

         if(this.props.showBooks){

             books = (
                <div className={classes.wrapperEditable}>
                    {this.state.booksArray.map((book, index) =>(
                    <div className={classes.booksContainerEditable}
                    key = {index + Math.random() * 1000}>
                        <div className={classes.icon}>
                            <EditButton click={() => this.editBook(index)}>
                                <img src={editIcon} alt=""/>
                            </EditButton>
                        </div>
                        <div className={classes.booksContainerInfoEditable}>
                            <h2>{book.book.title}</h2>
                            <p>{book.book.author}</p>
                            <p>Julkaisuvuosi {book.book.publisyear}</p>
                            <p>Luettu {book.book.read}</p>
                            <p>"{book.book.comment}"</p>
                        </div>
                        <div className={classes.booksContainerPictureEditable}>
                            <img src={book.image} alt=""></img>
                        </div>
                    </div>
                    ))}
                </div> 
             );
        }  
        return(
            <div>
                {books}
                <div>
                    <EditBook book={this.state.book} show={this.state.showEditBook}/>
                    <Backdrop show={this.state.showEditBook} clicked={this.closeEditBook}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(BooksContainerEditable);