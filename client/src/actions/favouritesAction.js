import axios from 'axios';
import { showAllItems, deleteFavouriteItems, addFavouriteItem, updateFavouriteItem } from '../store/reducers/favouritesReducer';

export const getItems = () => dispatch => {
  axios.get('http://localhost:5000/items')
    .then(result => {
      dispatch(showAllItems(result.data));
    })
    .catch(error => console.log(error));
};

export const deleteItems = id => dispatch => {
  axios.delete(`http://localhost:5000/items/${id}`)
    .then(() => dispatch(deleteFavouriteItems(id)));
};

export const addItem = item => dispatch => {
  axios.post('http://localhost:5000/items/add', item)
    .then(() => dispatch(addFavouriteItem(item)));
};

export const updateItem = item => dispatch => {
  axios.put(`http://localhost:5000/items/update/${item.id}`, item)
    .then(() => dispatch(updateFavouriteItem(item)));
};
