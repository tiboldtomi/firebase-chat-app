import * as yup from 'yup';
import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { animated } from 'react-spring';
import { usePrevious } from '../../utils';
import { RegisterContainer } from './styles';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, PasswordInput } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H1, TitleContainer, TitleIcon, SubTitle } from '../login/styles';
import { NotificationType } from '../../interfaces/notification.interface';
import { useNotificationStore, NotificationActions, useLoaderBannerStore, LoaderBannerActions } from '../../stores';

const validationSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required!')
        .min(6, 'Username must be at least 6 characters!')
        .max(18, `Username must be less than 18 characters!`)
        .matches(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/, 'Username is not valid!'),
    email: yup.string()
        .required('Email is required!')
        .email('Email is not valid!'),
    password: yup.string()
        .required('Password is required!')
        .min(6, 'Password must be at least 6 characters!'),
    confirmPassword: yup.string()
        .required('Confirm Password is required!')
        .oneOf([yup.ref('password')], 'Passwords must match!')

});

interface IFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IRegisterProps { }

const Register: React.FC<IRegisterProps> = () => {

    const { dispatchNotification } = useNotificationStore();
    const { dispatchIsLoading } = useLoaderBannerStore();

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

    const formController = useFormik<IFormValues>({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: ({ username, email, password, confirmPassword }) => {
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
            <Input
                name={'username'}
                placeholder={'username'}
                value={formController.values.username}
                onChange={formController.handleChange}
                style={{ transform: usernameFieldAnimation }}
                isValid={!!(formController.touched.username && !formController.errors.username)}
                isInvalid={!!(formController.touched.username && !!formController.errors.username)}
            />
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
            <PasswordInput
                name={'confirmPassword'}
                placeholder={'confirm password'}
                onChange={formController.handleChange}
                value={formController.values.confirmPassword}
                style={{ transform: confirmPWFieldAnimation }}
                isValid={!!(formController.touched.confirmPassword && !formController.errors.confirmPassword)}
                isInvalid={!!(formController.touched.confirmPassword && !!formController.errors.confirmPassword)}
            />
            <Button
                variant={'primary'}
                onClick={formController.handleSubmit}
                style={{ transform: registerButtonAnimation }}
            >
                {'register'}
            </Button>
        </RegisterContainer>
    );
}

export default Register;