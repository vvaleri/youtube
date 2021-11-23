import axios from 'axios';
import { getAllVideo, showErrorSearch, resetResultVideo } from '../store/reducers/videoReducer';

export const searchVideo = (inputValue, apiKey) => dispatch => {
  axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=${apiKey}&maxResults=20`)
    .then(result => {
      dispatch(resetResultVideo());
      dispatch(getAllVideo(result.data.items));
    })
    .catch(() => dispatch(showErrorSearch()));
};
