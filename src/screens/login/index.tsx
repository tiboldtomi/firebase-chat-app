import * as yup from 'yup';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { LoginContainer, H1, SubTitle } from './styles';
import { SocialMediaContainer, P } from '../welcome/styles';
import { useNotificationStore } from '../../stores/notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationType } from '../../interfaces/notification.interface';
import { Button, Input, SocialMediaButton, PasswordInput } from '../../components';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NotificationActions } from '../../stores/notification/notification.actions';

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Email is not valid!')
        .required('Every field is required!'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Every field is required!'),
});

interface IFormValues {
    email: string;
    password: string;
}

interface ILoginProps { }

const Login: React.FC<ILoginProps> = () => {

    const { dispatchNotification } = useNotificationStore();

    const {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        emailFieldAnimation,
        socialMediaAnimation,
        loginButtonAnimation,
    } = useAnimation();

    const formController = useFormik<IFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: ({ email, password }) => {
            if (dispatchNotification) {
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        type: NotificationType.Success,
                        message: 'Na működik vajon?',
                    }
                });
            }
        },
        validationSchema,
    });

    const AP = animated(P);
    const AH1 = animated(H1);
    const ASubTitle = animated(SubTitle);
    const ASocialMediaContainer = animated(SocialMediaContainer);

    console.log('formController: ', formController);

    return (
        <LoginContainer>
            <AH1 style={{ opacity: titleAnimation }}>{'welcome back'}</AH1>
            <ASubTitle style={{ transform: subTitleAnimation }}>{'login in'}</ASubTitle>
            <Input
                name={'email'}
                placeholder={'email'}
                value={formController.values.email}
                onChange={formController.handleChange}
                style={{ transform: emailFieldAnimation }}
                isValid={!!(formController.touched.email && !formController.errors.email)}
                isInvalid={!!(formController.touched.email && !!formController.errors.email)}
            />
            <PasswordInput
                name={'password'}
                placeholder={'password'}
                value={formController.values.password}
                onChange={formController.handleChange}
                style={{ transform: pwFieldAnimation }}
                isValid={!!(formController.touched.password && !formController.errors.password)}
                isInvalid={!!(formController.touched.password && !!formController.errors.password)}
            />
            <Button
                variant={'primary'}
                onClick={formController.handleSubmit}
                style={{ transform: loginButtonAnimation }}
            >
                {'Login'}
            </Button>
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