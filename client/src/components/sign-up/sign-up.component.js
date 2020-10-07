import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitele } from './sign-up.styles.js';

import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/custom-button.component.js';

import { signUpStart } from '../../redux/user/user.action.js';

const SignUp = ({ signUpStart }) => {

    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async e => {
        e.preventDefault()
        if (password !== confirmPassword){
            alert("Password do not match")
            return;
        }
        signUpStart({ displayName, email, password })
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return(
        <SignUpContainer >
            <SignUpTitele>I do not have account</SignUpTitele>
            <span>Sign Up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    label = 'Display Name'
                    onChange={handleChange}
                    required
                    />
                    <FormInput
                    type='email'
                    name='email'
                    value={email}
                    label = 'Email'
                    onChange={handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label = 'Password'
                    onChange={handleChange}
                    required
                    />
                    <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    label = 'Confirm password'
                    onChange={handleChange}
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
            </form>   
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp);