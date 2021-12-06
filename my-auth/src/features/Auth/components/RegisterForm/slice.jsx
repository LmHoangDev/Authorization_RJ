import {useStyles} from './styles';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export const classes = useStyles();

export const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should has at least two words', 'Please enter at least two words.', (value) => {
        return value.split(' ').length >= 2;
      }),

    email: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters.')
    .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6})$/ , 'Is not in correct format'),
    retypePassword: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  export const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });