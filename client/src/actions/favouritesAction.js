import axios from 'axios';
import { showAllItems, deleteFavouriteItems, addFavouriteItem, updateFavouriteItem, showErrorRequest } from '../store/reducers/favouritesReducer';

export const getItems = email => dispatch => {
  axios.get(`http://localhost:5000/items/${email}`)
    .then(result => {
      dispatch(showAllItems(result.data));
    })
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте повторить запрос позже')));
};

export const deleteItems = id => dispatch => {
  axios.delete(`http://localhost:5000/items/${id}`)
    .then(() => dispatch(deleteFavouriteItems(id)))
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте ещё раз')));
};

export const addItem = item => dispatch => {
  axios.post('http://localhost:5000/items/add', item)
    .then(() => dispatch(addFavouriteItem(item)));
};

export const updateItem = item => dispatch => {
  axios.put(`http://localhost:5000/items/update/${item.id}`, item)
    .then(() => dispatch(updateFavouriteItem(item)))
    .catch(() => dispatch(showErrorRequest('Ошибка. Пожалуйста, попробуйте ещё раз')));
};
