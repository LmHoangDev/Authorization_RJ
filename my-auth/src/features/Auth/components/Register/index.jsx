import PropTypes from 'prop-types';
import React from 'react';
import RegisterForm from '../RegisterForm';
import {dispatch,{enqueueSnackbar},handleSubmit} from './slice';
Register.propTypes = {
  closeDialog: PropTypes.func,
};

function Register(props) {
  const handleSubmit = handleSubmit(values,props,closeDialog);
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
