import React from 'react';

import SignIn from '../../components/signIn/sign-in.component';
import SignUp from '../../components/signUp/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignningPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignningPage;