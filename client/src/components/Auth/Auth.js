import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUserData } from '../../actions/userAction';
import { LoginForm } from '../LoginForm/LoginForm';

export const Auth = () => {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const { errRegistration, errorText } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const initAuth = e => {
    e.preventDefault();
    const userData = {
      email: inputValue.email,
      password: inputValue.password
    };
    dispatch(authUserData(userData));
  };

  return (
    <LoginForm
      inputValue={inputValue}
      email={inputValue.email}
      password={inputValue.password}
      setInputValue={setInputValue}
      textButton="Войти"
      formAction={initAuth}
      isError={errRegistration}
      textError={errorText}
    />
  );
};
