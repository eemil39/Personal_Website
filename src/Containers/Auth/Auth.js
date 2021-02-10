import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import classes from './Auth.module.css';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Buttons/Button';
import { updateObject, checkValiditation } from '../../shared/uitility';
import * as actions from '../../store/actions/index';

class Auth extends Component{

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Sähköposti'
                },
                value: '',
                validation: {
                    rquired: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Salasana'
                },
                value: '',
                validation: {
                    rquired: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls,{
            [controlName]: updateObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValiditation(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }


    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    
    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            });
        }

        let form = formElementsArray.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
        ));

        if (this.props.auth) {
            form = <Redirect to="/"/>;
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return(
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {errorMessage}
                    {form}
                <Button>Kirjaudu sisään</Button>
                </form>
{/*                 <Button 
                click={this.switchAuthModeHandler}
                btnType="Danger">Switch to {this.state.isSignup ? 'Kirjaudu sisään' : 'Rekisteröidy'}</Button> */}
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        auth: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Auth);