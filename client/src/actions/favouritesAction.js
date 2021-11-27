import axios from 'axios';
import { showAllItems, deleteFavouriteItems, addFavouriteItem, updateFavouriteItem, showErrorRequest } from '../store/reducers/favouritesReducer';

export const getItems = email => dispatch => {
  axios.get(`https://aqueous-ravine-02237.herokuapp.com/items/${email}`)
    .then(result => {
      dispatch(showAllItems(result.data));
    })
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте повторить запрос позже')));
};

export const deleteItems = id => dispatch => {
  axios.delete(`https://aqueous-ravine-02237.herokuapp.com/items/${id}`)
    .then(() => dispatch(deleteFavouriteItems(id)))
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте ещё раз')));
};

export const addItem = item => dispatch => {
  axios.post('https://aqueous-ravine-02237.herokuapp.com/items/add', item)
    .then(() => dispatch(addFavouriteItem(item)));
};

export const updateItem = item => dispatch => {
  axios.put(`https://aqueous-ravine-02237.herokuapp.com/items/update/${item.id}`, item)
    .then(() => dispatch(updateFavouriteItem(item)))
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте ещё раз')));
};
