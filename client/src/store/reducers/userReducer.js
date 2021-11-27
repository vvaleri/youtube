const defaultState = {
  user: {},
  isAuth: false,
  errRegistration: false,
  errorText: '',
  isLoadUser: false
};

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SHOW_ERROR_REGISTRATION = 'SHOW_ERROR_REGISTRATION';
const LOADING_USER = 'LOADING_USER';

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        isLoadUser: true
      };

    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        errRegistration: false,
        errorText: '',
        isLoadUser: false
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
        errorText: action.payload,
        isLoadUser: false
      };
    default:
      return state;
  }
};

export const isUserLoading = () => ({ type: LOADING_USER });
export const setUser = user => ({ type: SET_USER, payload: user });
export const logoutUser = () => ({ type: LOGOUT });
export const initErrRigistration = payload => ({ type: SHOW_ERROR_REGISTRATION,
  payload });
