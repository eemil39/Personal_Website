import React, { Component } from 'react';

import classes from './BooksForm.module.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Buttons/Button';
import axios from '../../axios-books';
import { updateObject, checkValiditation } from '../../shared/uitility';
import { connect } from 'react-redux';
import { storage } from '../../firebase/index'


class BooksForm extends Component {
    
    state = {
        booksForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kirjan nimi'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            author: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kirjailija'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            publisyear: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Julkaisuvuosi'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            read: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Luettu (pvm)'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            },
            comment: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Kommentti'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 100
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        selectedFile: null,
        url: null,
        imageUploaded: false,
        disabled: true,
        missingInfo: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
         console.log(inputIdentifier)
        const updatedFormElement = updateObject(this.state.booksForm[inputIdentifier], {
            value: event.target.value,
            valid: checkValiditation(event.target.value, this.state.booksForm[inputIdentifier].validation),
            touched: true
        });
        
        const updatedBooksForm = updateObject(this.state.booksForm, {
            [inputIdentifier]: updatedFormElement
        });
        
        let formIsValid = true;
        for (let inputIdentifier in updatedBooksForm) {
            formIsValid = updatedBooksForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({booksForm: updatedBooksForm, formIsValid: formIsValid});
        
    }
    fileSelectedHandler = event => {
        this.setState({selectedFile: event.target.files[0]});
        this.setState({imageUploaded: true})
    }

    saveInformationToFireBase = (event) =>{
        event.preventDefault();
        if(this.state.formIsValid && this.state.imageUploaded){
            this.SaveBookImageToFireBase();
        } else {
            this.setState({missingInfo: true})
        }

    }

    SaveBookImageToFireBase = () =>{
        const image = this.state.selectedFile;
        const uploadImg = storage.ref(`images/${image.name}`).put(image);
        uploadImg.on('state_changed', 
        (snapshot) => {

        }, 
        (error) => {
            console.log(error)
        }, 
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                this.setState({url: url});
                this.SaveBookToFireBase();
            })
        }); 
        return this.state.url;
    }

    SaveBookToFireBase = () => {
        const formData = {
            image: this.state.url,
            book: {}
        };
        for (let formElementIndentifier in this.state.booksForm) {
            formData.book[formElementIndentifier] = this.state.booksForm[formElementIndentifier].value;
        }
    
        axios.post('/books.json?auth=' + this.props.token , formData)
        .then(res => window.location.reload(false))
        .catch(err => console.log(err));
    } 

    disableButton = () =>{
        this.setState({disabled: false})
    }

    render () {
        const formElementsArray = [];
        let missingInfoWarning = '';
        if (this.state.missingInfo){
            missingInfoWarning = <div className={classes.warning}>Anna kaikki tarvittavat tiedot!</div>;
        }
            
        for (let key in this.state.booksForm) {
            formElementsArray.push({
                id: key,
                config: this.state.booksForm[key]
            });
        }
        let form = (
            <div>   
                <form onSubmit={this.saveInformationToFireBase}>
                {formElementsArray.map(formElement =>(
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
                ))}
                {missingInfoWarning}
                    <Button>Tallenna</Button>
    
                </form>  

            </div>
        );

        return (
                <div className={classes.ContactData}>
                    <div className={classes.Title}>
                        <h4>Anna kirjan tiedot</h4>
                    </div>
                    <div className={classes.ImageUpload}>
                        <div className={classes.InputElement}>
                            <input type="file" onChange={this.fileSelectedHandler}/>
                        </div>
                    </div>
                    {form}
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
