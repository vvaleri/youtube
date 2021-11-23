const defaultState = {
  user: {},
  isAuth: false,
  errRegistration: false,
  errorText: ''
};

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SHOW_ERROR_REGISTRATION = 'SHOW_ERROR_REGISTRATION';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        errRegistration: false,
        errorText: ''
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: {},
        isAuth: false
      };
    case SHOW_ERROR_REGISTRATION:
      return {
        ...state,
        errRegistration: true,
        errorText: action.payload
      };
    default:
      return state;
  }
};

export const setUser = user => ({ type: SET_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT });
export const initErrRigistration = payload => ({ type: SHOW_ERROR_REGISTRATION,
  payload });
