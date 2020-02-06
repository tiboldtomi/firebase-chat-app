import * as yup from 'yup';
import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { SocialMediaContainer, P } from '../welcome/styles';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNotificationStore } from '../../stores/notification';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NotificationType } from '../../interfaces/notification.interface';
import { LoginContainer, H1, SubTitle, TitleIcon, TitleContainer } from './styles';
import { Button, Input, SocialMediaButton, PasswordInput } from '../../components';
import { faGoogle, faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NotificationActions } from '../../stores/notification/notification.actions';

const validationSchema = yup.object().shape({
    email: yup.string()
        .required('Every field is required!')
        .email('Email is not valid!'),
    password: yup.string()
        .required('Every field is required!')
        .min(6, 'Password must be at least 6 characters!'),
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
            console.log('%c Submitted!', 'color: green');
            formController.resetForm();
        },
        validationSchema,
    });

    React.useEffect(() => {
        if (!formController.isSubmitting && !formController.isValid) {
            dispatchNotification({
                type: NotificationActions.ADD,
                payload: {
                    id: uuid(),
                    timeStamp: Date.now(),
                    type: NotificationType.Danger,
                    message: (formController.errors.email || formController.errors.password) as string,
                }
            });
        }
        // eslint-disable-next-line
    }, [formController.isSubmitting]);

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