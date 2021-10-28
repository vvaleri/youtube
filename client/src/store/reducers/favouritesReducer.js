const defaultState = {
  favourites: []
};

const GET_ITEMS = 'GET_ITEMS';
const DELETE_ITEMS = 'DELETE_ITEMS';

export const favouritesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, favourites: action.payload };

    case DELETE_ITEMS:
      return { ...state, favourites: state.favourites.filter(item => item._id !== action.payload) };

    default:
      return state;
  }
};

export const showAllItems = payload => ({ type: GET_ITEMS, payload });
export const deleteFavouriteItems = payload => ({ type: DELETE_ITEMS, payload });
