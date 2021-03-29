import { useState } from 'react';
import apiKey  from '../config/key';

export default function useFetch() {
  const [ video, setVideo ] = useState('');
  const [ inputValue, setInputValue ] = useState('');
  const [ mainSearch, setMainSearch ] = useState(false);

  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
    setMainSearch(true);
  }

  return { mainSearch, setMainSearch, inputValue, setInputValue, getVideo }
}
