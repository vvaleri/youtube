const defaultState = {
  user: {},
  isAuth: false
};

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: {},
        isAuth: false
      };
    default:
      return state;
  }
};

export const setUser = user => ({ type: SET_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT });
