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

    return (
        <RegisterContainer>
            <AH1 style={{ opacity: titleAnimation }}>{'Register now'}</AH1>
            <Input style={{ transform: usernameFieldAnimation }} name={'username'} placeholder={'username'} />
            <Input style={{ transform: emailFieldAnimation }} name={'email'} placeholder={'email'} />
            <PasswordInput style={{ transform: pwFieldAnimation }} name={'password'} placeholder={'password'} />
            <PasswordInput style={{ transform: confirmPWFieldAnimation }} name={'confirmPassword'} placeholder={'confirm password'} />
            <Button style={{ transform: registerButtonAnimation }} variant={'primary'}>{'register'}</Button>
        </RegisterContainer>
    );
}

export default Register;