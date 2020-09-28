import React from 'react';

import { SignInAndSignUpContainer } from'./sign-in-and-sign-up.styles.js';

import SignIn from '../../components/sign-in/sign-in.component.js';
import SignUp from '../../components/sign-up/sign-up.component.js';

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer >
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
)

export default SignInAndSignUpPage 