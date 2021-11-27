import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authUserData } from '../../actions/userAction';
import { LoginForm } from '../LoginForm/LoginForm';
import { Loader } from '../Loader/Loader';
import { isUserLoading } from '../../store/reducers/userReducer';

export const Auth = () => {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const { errRegistration, errorText, isLoadUser } = useSelector(state => state.userReducer);

  const dispatch = useDispatch();

  const initAuth = e => {
    e.preventDefault();
    const userData = {
      email: inputValue.email,
      password: inputValue.password
    };
    dispatch(isUserLoading());
    dispatch(authUserData(userData));
  };

  return (
    <>
      {isLoadUser && <Loader />}
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
    </>
  );
};
