import React from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitele } from './sign-up.styles.js';

import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/custom-button.component.js';

import { signUpStart } from '../../redux/user/user.action.js';

class SignUp extends React.Component {
    constructor(){

        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        const { signUpStart } = this.props
        const {displayName, email, password, confirmPassword} = this.state
        if (password !== confirmPassword){
            alert("Password do not match")
            return;
        }
        signUpStart({ displayName, email, password })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <SignUpContainer >
                <SignUpTitele>I do not have account</SignUpTitele>
                <span>Sign Up with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label = 'Display Name'
                        onChange={this.handleChange}
                        required
                     />
                     <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label = 'Email'
                        onChange={this.handleChange}
                        required
                     />
                     <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label = 'Password'
                        onChange={this.handleChange}
                        required
                     />
                     <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label = 'Confirm password'
                        onChange={this.handleChange}
                        required
                     />
                     <CustomButton type='submit'>Sign Up</CustomButton>
                </form>   
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null, mapDispatchToProps)(SignUp);