import axios from 'axios';
import { push } from 'connected-react-router';
import { setUser, initErrRigistration } from '../store/reducers/userReducer';

export const authUserData = user => dispatch => {
  axios.post('https://aqueous-ravine-02237.herokuapp.com/users/login', user)
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token);
      dispatch(push('/search'));
    })
    .catch(error => {
      if (!error.response) {
        dispatch(initErrRigistration('Server error. Please, try again'));
      } else if (error.response.status !== 200) {
        dispatch(initErrRigistration(error.response.data.message));
      }
    });
};

export const postUserData = user => dispatch => {
  axios.post('https://aqueous-ravine-02237.herokuapp.com/users/registration', user)
    .then(res => dispatch(authUserData(user)))
    .catch(error => {
      if (!error.response) {
        dispatch(initErrRigistration('Server error. Please, try again'));
      } else if (error.response.status !== 200) {
        dispatch(initErrRigistration(error.response.data.message));
      }
    });
};

export const authUser = () => dispatch => {
  axios.get('https://aqueous-ravine-02237.herokuapp.com/users/auth',
    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    .then(res => {
      dispatch(setUser(res.data.user));
      localStorage.setItem('token', res.data.token);
    })
    .catch(() => localStorage.removeItem('token'));
};
