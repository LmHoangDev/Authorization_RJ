import {useStyles} from './styles';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
export const classes = useStyles();
export const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email address.'),
    password: yup.string().required('Please enter your password'),
  });
export const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });