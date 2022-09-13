import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/LoginForm';
import LogoutForm from '../components/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../slice';

import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, []);

  const handleClickLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          fields={loginFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
