import axios from 'axios';
import { getAllVideo } from '../store/reducers/videoReducer';

export const searchVideo = (inputValue, apiKey) => dispatch => {
  axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=${apiKey}&maxResults=20`)
    .then(result => {
      dispatch(getAllVideo(result.data.items));
    })
    .catch(error => console.log(error));
};
