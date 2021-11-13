import axios from 'axios';
import { setUser } from '../store/reducers/userReducer';

export const postUserData = user => {
  axios.post('http://localhost:5000/users/registration', user)
    .then(res => console.log(res.data));
};

export const authUserData = user => dispatch => {
  axios.post('http://localhost:5000/users/login', user)
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token);
    });
};

export const authUser = () => dispatch => {
  axios.get('http://localhost:5000/users/auth',
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token);
      console.log(res.data);
    })
    .catch(() => localStorage.removeItem('token'));
};
