const defaultState = {
  favourites: [],
  errorItems: false,
  errortext: ''
};

const GET_ITEMS = 'GET_ITEMS';
const DELETE_ITEMS = 'DELETE_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SHOW_ERROR_ITEMS = 'SHOW_ERROR_ITEMS';

export const favouritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, favourites: action.payload };

    case DELETE_ITEMS:
      return { ...state, favourites: state.favourites.filter(item => item._id !== action.payload) };

    case ADD_ITEM:
      return { ...state, favourites: [...state.favourites, action.payload] };

    case UPDATE_ITEM:
      return { ...state,
        favourites: state.favourites.map(item => item._id === action.payload.id
          ? action.payload
          : item) };

    case SHOW_ERROR_ITEMS:
      return { ...state,
        errorItems: true,
        errortext: action.payload };

    default:
      return state;
  }
};

export const showAllItems = payload => ({ type: GET_ITEMS, payload });
export const deleteFavouriteItems = payload => ({ type: DELETE_ITEMS, payload });
export const addFavouriteItem = payload => ({ type: ADD_ITEM, payload });
export const updateFavouriteItem = payload => ({ type: UPDATE_ITEM, payload });
export const showErrorRequest = payload => ({ type: SHOW_ERROR_ITEMS, payload });
