import React from 'react';

import SignIn from '../../components/signIn/sign-in.component';
import SignUp from '../../components/signUp/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignningPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignningPage;