import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { postUserData } from '../../actions/userAction';
import { LoginForm } from '../LoginForm/LoginForm';

export const Registration = () => {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  const initRegistation = e => {
    e.preventDefault();
    const userData = {
      email: inputValue.email,
      password: inputValue.password
    };
    postUserData(userData);
  };

  return (
    <LoginForm
      inputValue={inputValue}
      email={inputValue.email}
      password={inputValue.password}
      setInputValue={setInputValue}
      textButton="Зарегистрироваться"
      buttonAction={initRegistation}
    >
      <div>Уже зарегистрированы?</div>
      <NavLink exact to="/login">войти</NavLink>
    </LoginForm>
  );
};
