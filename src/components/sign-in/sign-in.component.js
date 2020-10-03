import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ButtonsContainer, SignInTitle, SignInContainer } from './sign-in.styles.js'

import FormInput from '../form-input/form-input.component.js';
import CustomButton from '../custom-button/custom-button.component.js';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';


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
        const { emailSignInStart } = this.props
        const { email, password } = this.state

        emailSignInStart(email,password)
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render() {
        const { googleSignInStart } = this.props
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

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () =>dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);