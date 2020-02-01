import * as yup from 'yup';
import { useFormik } from 'formik';

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

const useFormController = () => {

    const formController = useFormik<IFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: ({ email, password }) => {
            console.log('Login form submitted');
        },
        validationSchema,
    });

    return formController;
}

export default useFormController;