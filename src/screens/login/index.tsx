import * as yup from 'yup';
import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { usePrevious } from '../../utils';
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

    const { dispatchNotification } = useNotificationStore();
    const { dispatchIsLoading } = useLoaderBannerStore();

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
            dispatchNotification({
                type: NotificationActions.ADD,
                payload: {
                    id: uuid(),
                    timeStamp: Date.now(),
                    type: NotificationType.Success,
                    message: 'Form submitted!! :)',
                }
            });
            formController.resetForm();
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

    const isValidatingPrevious = usePrevious(formController.isValidating);

    React.useEffect(() => {
        if (formController.isValidating) {
            dispatchIsLoading({ type: LoaderBannerActions.START, payload: { isLoading: true, text: 'Logging in...' } });
        }
        else if (!formController.isValidating && isValidatingPrevious) {
            dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
        }
        // eslint-disable-next-line
    }, [formController.isValidating]);

    const loginWithSocialMedia = (platform: ('Facebook' | 'GitHub' | 'Google')) => {
        dispatchNotification({
            type: NotificationActions.ADD,
            payload: {
                id: uuid(),
                timeStamp: Date.now(),
                type: NotificationType.Warning,
                message: `Login with ${platform} is under development.`,
            }
        });
    }

    const AP = animated(P);
    const AH1 = animated(H1);
    const ASubTitle = animated(SubTitle);
    const ATitleIcon = animated(TitleIcon);
    const ASocialMediaContainer = animated(SocialMediaContainer);

    return (
        <LoginContainer>
            <TitleContainer>
                <AH1 style={{ opacity: titleAnimation }}>{'welcome back'}</AH1>
                <ATitleIcon style={{ transform: titleIconAnimation }}>
                    <FontAwesomeIcon icon={faSignInAlt} style={{ width: '100%', height: '100%' }} />
                </ATitleIcon>
            </TitleContainer>
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
                <SocialMediaButton onClick={() => loginWithSocialMedia('Facebook')}>
                    <FontAwesomeIcon icon={faFacebookF} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => loginWithSocialMedia('Google')}>
                    <FontAwesomeIcon icon={faGoogle} size={'2x'} />
                </SocialMediaButton>
                <SocialMediaButton onClick={() => loginWithSocialMedia('GitHub')}>
                    <FontAwesomeIcon icon={faGithub} size={'2x'} />
                </SocialMediaButton>
            </ASocialMediaContainer>
        </LoginContainer>
    );
}

export default Login;