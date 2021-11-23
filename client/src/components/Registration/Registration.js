import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/userAction';
import { LoginForm } from '../LoginForm/LoginForm';

export const Registration = () => {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const { errRegistration, errorText } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const initRegistation = e => {
    e.preventDefault();
    const userData = {
      email: inputValue.email,
      password: inputValue.password
    };
    dispatch(postUserData(userData));
  };

  return (
    <LoginForm
      inputValue={inputValue}
      email={inputValue.email}
      password={inputValue.password}
      setInputValue={setInputValue}
      textButton="Зарегистрироваться"
      formAction={initRegistation}
      isError={errRegistration}
      textError={errorText}
    >
      <p>Уже зарегистрированы?</p>
      <NavLink exact to="/login">войти</NavLink>
    </LoginForm>
  );
};
