import * as yup from 'yup';
import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { useFirebase } from '../../utils';
import { SocialMediaContainer, P } from '../welcome/styles';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationType } from '../../interfaces/notification.interface';
import { LoginContainer, H1, SubTitle, TitleIcon, TitleContainer } from './styles';
import { Button, Input, SocialMediaButton, PasswordInput } from '../../components';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNotificationStore, NotificationActions, useLoaderBannerStore, LoaderBannerActions } from '../../stores';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required!')
        .email('Email is not valid!'),
    password: yup.string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters!'),
});

interface IFormValues {
    email: string;
    password: string;
}

interface ILoginProps { }

const Login: React.FC<ILoginProps> = () => {

    const { login, loginSocialMedia } = useFirebase();
    const { dispatchIsLoading } = useLoaderBannerStore();
    const { dispatchNotification } = useNotificationStore();

    const {
        titleAnimation,
        pwFieldAnimation,
        subTitleAnimation,
        titleIconAnimation,
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
            dispatchIsLoading({ type: LoaderBannerActions.START, payload: { isLoading: true, text: 'Logging in...' } });
            login(email, password)
                .then(() => {
                    dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
                    formController.resetForm();
                    dispatchNotification({
                        type: NotificationActions.ADD,
                        payload: {
                            id: uuid(),
                            timeStamp: Date.now(),
                            type: NotificationType.Success,
                            message: 'You have been successfully logged in!'
                        }
                    });
                })
                .catch(({ message }) => {
                    dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
                    dispatchNotification({
                        type: NotificationActions.ADD,
                        payload: {
                            message,
                            id: uuid(),
                            timeStamp: Date.now(),
                            type: NotificationType.Danger,
                        }
                    });
                });
        },
        validationSchema,
    });

    React.useEffect(() => {
        if (!formController.isSubmitting && !formController.isValid) {
            for (const key in formController.errors) {
                if (!!formController.errors[key]) {
                    setTimeout(() => {
                        dispatchNotification({
                            type: NotificationActions.ADD,
                            payload: {
                                id: uuid(),
                                timeStamp: Date.now(),
                                type: NotificationType.Danger,
                                message: formController.errors[key] as string,
                            }
                        });
                    });
                }
            }
        }
        // eslint-disable-next-line
    }, [formController.isSubmitting]);

    const _loginWithSocialMedia = (platform: ('Facebook' | 'GitHub' | 'Google')) => {
        loginSocialMedia(platform)
            .then(() => {
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        id: uuid(),
                        timeStamp: Date.now(),
                        type: NotificationType.Success,
                        message: `You have been successfully logged in with ${platform}!`,
                    }
                });
            })
            .catch(({ message }) => {
                dispatchNotification({
                    type: NotificationActions.ADD,
                    payload: {
                        message,
                        id: uuid(),
                        timeStamp: Date.now(),
                        type: NotificationType.Danger,
                    }
                });
            });
    }

    return (
        <LoginContainer>
            <TitleContainer>
                <H1 style={{ opacity: titleAnimation }}>{'welcome back'}</H1>
                <TitleIcon style={{ transform: titleIconAnimation }}>
                    <FontAwesomeIcon icon={faSignInAlt} style={{ width: '100%', height: '100%' }} />
                </TitleIcon>
            </TitleContainer>
            <SubTitle style={{ transform: subTitleAnimation }}>{'login in'}</SubTitle>
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
            <P style={{ transform: socialMediaAnimation }}>{'or login using social media'}</P>
            <SocialMediaContainer style={{ transform: socialMediaAnimation }}>
                <SocialMediaButton onClick={() => _loginWithSocialMedia('Facebook')}>
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => _loginWithSocialMedia('Google')}>
                    <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => _loginWithSocialMedia('GitHub')}>
                    <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </SocialMediaButton>
            </SocialMediaContainer>
        </LoginContainer>
    );
}

export default Login;