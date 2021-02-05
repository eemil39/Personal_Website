import React, { Component } from 'react';

import classes from './BooksForm.module.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Buttons/Button';
import axios from '../../axios-books';
import { updateObject, checkValiditation } from '../../shared/uitility';


class BooksForm extends Component {
    
    state = {
        booksForm: {
            title: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Title'
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
                    placeholder: 'Author'
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
                    placeholder: 'Publishyear'
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
                    placeholder: 'When did you finish reading?'
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
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Comment'
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
        formIsValid: false
    }

    inputChangedHandler = (event, inputIdentifier) => {
         
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

    SaveBookToFireBase = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIndentifier in this.state.booksForm) {
            formData[formElementIndentifier] = this.state.booksForm[formElementIndentifier].value;
        }
        axios.post('/books.json', formData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } 

    render () {
        const formElementsArray = [];
        for (let key in this.state.booksForm) {
            formElementsArray.push({
                id: key,
                config: this.state.booksForm[key]
            });
        }
        let form = (
            <form onSubmit={this.SaveBookToFireBase}>
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
            <Button disabled={!this.state.formIsValid}>Tallenna</Button>
          </form>  
        );

        return (
                <div className={classes.ContactData}>
                    <h4>Anna kirjan tiedot</h4>
                    {form}
                </div>
        );
    }
}

export default BooksForm;