import axios from 'axios';
import { showAllItems, deleteFavouriteItems } from '../store/reducers/favouritesReducer';

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
