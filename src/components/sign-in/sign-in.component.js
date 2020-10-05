import React, { useState } from 'react';
import { connect } from 'react-redux'

import { ButtonsContainer, SignInTitle, SignInContainer } from './sign-in.styles.js'

import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/custom-button.component.js';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials
    
    const handleSubmit = async e => {
        e.preventDefault();

        emailSignInStart(email,password)
    }

    const handleChange = (e) => {
        const {value, name} = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }
 
    return(
        <SignInContainer >
            <SignInTitle >I already have an acount</SignInTitle>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    value={email}
                    required
                    handleChange={handleChange}
                    label='Email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange={handleChange}
                    label='Password'
                />
                <ButtonsContainer >
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton 
                        type='button' 
                        onClick={googleSignInStart} 
                        isGoogleSignIn 
                    >
                        Sign In with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);