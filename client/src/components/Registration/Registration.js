import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../../actions/userAction';
import { LoginForm } from '../LoginForm/LoginForm';
import { Loader } from '../Loader/Loader';
import { isUserLoading } from '../../store/reducers/userReducer';

export const Registration = () => {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const [isTip, setIsTip] = useState(true);
  const [tipPassword, setTipPassword] = useState(false);

  const { errRegistration, errorText, isLoadUser } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const initRegistation = e => {
    e.preventDefault();
    const userData = {
      email: inputValue.email,
      password: inputValue.password
    };
    dispatch(isUserLoading());
    dispatch(postUserData(userData));
  };

  const showTipPassword = () => {
    setTipPassword(true);
    setTimeout(() => {
      setTipPassword(false);
    }, 2000);
  };

  return (
    <>
      {isLoadUser && <Loader />}
      <LoginForm
        inputValue={inputValue}
        email={inputValue.email}
        password={inputValue.password}
        setInputValue={setInputValue}
        textButton="Зарегистрироваться"
        formAction={initRegistation}
        isError={errRegistration}
        textError={errorText}
        isTip={isTip}
        tipPassword={tipPassword}
        showTipPassword={showTipPassword}
      >
        <p>Уже зарегистрированы?</p>
        <NavLink exact to="/login">войти</NavLink>
      </LoginForm>
    </>

  );
};
