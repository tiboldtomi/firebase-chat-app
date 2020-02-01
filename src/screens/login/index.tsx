import * as React from 'react';
import { animated } from 'react-spring';
import { LoginContainer, H1, SubTitle } from './styles';
import { useAnimation, useFormController } from './hooks';
import { SocialMediaContainer, P } from '../welcome/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input, SocialMediaButton, PasswordInput } from '../../components';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

interface ILoginProps { }

const Login: React.FC<ILoginProps> = () => {

    const {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        emailFieldAnimation,
        socialMediaAnimation,
        loginButtonAnimation,
    } = useAnimation();

    const formController = useFormController();

    const AP = animated(P);
    const AH1 = animated(H1);
    const AButton = animated(Button);
    const ASubTitle = animated(SubTitle);
    const ASocialMediaContainer = animated(SocialMediaContainer);

    console.log('formController: ', formController);

    return (
        <LoginContainer>
            <AH1 style={{ opacity: titleAnimation }}>{'welcome back'}</AH1>
            <ASubTitle style={{ transform: subTitleAnimation }}>{'login in'}</ASubTitle>

            <animated.div style={{ transform: emailFieldAnimation, width: '100%' }}>
                <Input
                    name={'email'}
                    placeholder={'email'}
                    value={formController.values.email}
                    onChange={formController.handleChange}
                    isValid={!!(formController.touched.email && !formController.errors.email)}
                    isInvalid={!!(formController.touched.email && !!formController.errors.email)}
                />
            </animated.div>
            <animated.div style={{ transform: pwFieldAnimation, width: '100%' }}>
                <PasswordInput
                    name={'password'}
                    placeholder={'password'}
                    value={formController.values.password}
                    onChange={formController.handleChange}
                    isValid={!!(formController.touched.password && !formController.errors.password)}
                    isInvalid={!!(formController.touched.password && !!formController.errors.password)}
                />
            </animated.div>
            <AButton
                variant={'primary'}
                onClick={formController.handleSubmit}
                style={{ transform: loginButtonAnimation }}
            >
                {'Login'}
            </AButton>

            <AP style={{ transform: socialMediaAnimation }}>{'or login using social media'}</AP>
            <ASocialMediaContainer style={{ transform: socialMediaAnimation }}>
                <SocialMediaButton onClick={() => console.log('facebook login onclick')}>
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => console.log('google login onclick')}>
                    <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => console.log('github login onclick')}>
                    <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </SocialMediaButton>
            </ASocialMediaContainer>
        </LoginContainer>
    );
}

export default Login;