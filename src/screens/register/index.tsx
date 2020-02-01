import * as React from 'react';
import { H1 } from '../login/styles';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { RegisterContainer } from './styles';
import { Button, Input, PasswordInput } from '../../components';

interface IRegisterProps { }

const Register: React.FC<IRegisterProps> = () => {

    const {
        titleAnimation,
        pwFieldAnimation,
        emailFieldAnimation,
        usernameFieldAnimation,
        confirmPWFieldAnimation,
        registerButtonAnimation,
    } = useAnimation();

    const AH1 = animated(H1);
    const AInput = animated(Input);
    const AButton = animated(Button);
    const APasswordInput = animated(PasswordInput);

    return (
        <RegisterContainer>
            <AH1 style={{ opacity: titleAnimation }}>{'Register now'}</AH1>
            <AInput style={{ transform: usernameFieldAnimation }} name={'username'} placeholder={'username'} />
            <AInput style={{ transform: emailFieldAnimation }} name={'email'} placeholder={'email'} />
            <APasswordInput style={{ transform: pwFieldAnimation }} name={'password'} placeholder={'password'} />
            <APasswordInput style={{ transform: confirmPWFieldAnimation }} name={'confirmPassword'} placeholder={'confirm password'} />
            <AButton style={{ transform: registerButtonAnimation }} variant={'primary'}>{'register'}</AButton>
        </RegisterContainer>
    );
}

export default Register;