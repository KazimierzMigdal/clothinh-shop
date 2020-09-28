import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/custom-button.component.js';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

import { ButtonsContainer, SignInTitle, SignInContainer } from './sign-in.styles.js'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        } catch (error){
            console.log(error)
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <SignInContainer >
                <SignInTitle >I already have an acount</SignInTitle>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                    />
                    <ButtonsContainer >
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }

}

export default SignIn;