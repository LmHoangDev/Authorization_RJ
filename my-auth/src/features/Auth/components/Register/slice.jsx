import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
export const dispatch = useDispatch();
export const {enqueueSnackbar} = useSnackbar();

export const handleSubmit = async (values,props,closeDialog) => {
    try {
      // auto set username = email
      values.username = values.email;

      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // close dialog
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      enqueueSnackbar('Register successfully!!! 🎉', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register:', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };