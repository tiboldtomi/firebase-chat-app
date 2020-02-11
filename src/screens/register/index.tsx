import * as yup from 'yup';
import { uuid } from 'uuidv4';
import * as React from 'react';
import { useFormik } from 'formik';
import { useAnimation } from './hooks';
import { useFirebase } from '../../utils';
import { RegisterContainer } from './styles';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Input, PasswordInput } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H1, TitleContainer, TitleIcon, SubTitle } from '../login/styles';
import { NotificationType } from '../../interfaces/notification.interface';
import { useNotificationStore, NotificationActions, LoaderBannerActions, useLoaderBannerStore } from '../../stores';

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

    const { register } = useFirebase();
    const { dispatchIsLoading } = useLoaderBannerStore();
    const { dispatchNotification } = useNotificationStore();

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
        onSubmit: ({ username, email, password }) => {
            dispatchIsLoading({ type: LoaderBannerActions.START, payload: { isLoading: true, text: 'Registering...' } });
            register(username, email, password)
                .then(() => {
                    dispatchIsLoading({ type: LoaderBannerActions.STOP, payload: { isLoading: false } });
                    formController.resetForm();
                    dispatchNotification({
                        type: NotificationActions.ADD,
                        payload: {
                            id: uuid(),
                            timeStamp: Date.now(),
                            type: NotificationType.Success,
                            message: 'You have been successfully registered!'
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


    return (
        <RegisterContainer>
            <TitleContainer>
                <H1 style={{ opacity: titleAnimation }}>{'great idea'}</H1>
                <TitleIcon style={{ transform: titleIconAnimation }}>
                    <FontAwesomeIcon icon={faUserPlus} style={{ width: '100%', height: '100%' }} />
                </TitleIcon>
            </TitleContainer>
            <SubTitle style={{ transform: subTitleAnimation }}>{'register now'}</SubTitle>
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