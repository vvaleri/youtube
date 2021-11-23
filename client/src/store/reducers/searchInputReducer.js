const defaultState = {
  inputSearch: ''
};

const GET_INPUT_VALUE = 'GET_INPUT_VALUE';

export const searchInputReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_INPUT_VALUE:
      return { ...state, inputSearch: action.payload };

    default:
      return state;
  }
};

export const getInputValue = payload => ({ type: GET_INPUT_VALUE, payload });
