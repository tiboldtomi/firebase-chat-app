import * as React from 'react';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { RegisterContainer } from './styles';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, PasswordInput } from '../../components';
import { H1, TitleContainer, TitleIcon, SubTitle } from '../login/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IRegisterProps { }

const Register: React.FC<IRegisterProps> = () => {

    const {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        titleIconAnimation,
        emailFieldAnimation,
        usernameFieldAnimation,
        confirmPWFieldAnimation,
        registerButtonAnimation,
    } = useAnimation();

    const AH1 = animated(H1);
    const ASubTitle = animated(SubTitle);
    const ATitleIcon = animated(TitleIcon);

    return (
        <RegisterContainer>
            <TitleContainer>
                <AH1 style={{ opacity: titleAnimation }}>{'great idea'}</AH1>
                <ATitleIcon style={{ transform: titleIconAnimation }}>
                    <FontAwesomeIcon icon={faUserPlus} style={{ width: '100%', height: '100%' }} />
                </ATitleIcon>
            </TitleContainer>
            <ASubTitle style={{ transform: subTitleAnimation }}>{'register now'}</ASubTitle>
            <Input style={{ transform: usernameFieldAnimation }} name={'username'} placeholder={'username'} />
            <Input style={{ transform: emailFieldAnimation }} name={'email'} placeholder={'email'} />
            <PasswordInput style={{ transform: pwFieldAnimation }} name={'password'} placeholder={'password'} />
            <PasswordInput style={{ transform: confirmPWFieldAnimation }} name={'confirmPassword'} placeholder={'confirm password'} />
            <Button style={{ transform: registerButtonAnimation }} variant={'primary'}>{'register'}</Button>
        </RegisterContainer>
    );
}

export default Register;