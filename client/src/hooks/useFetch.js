import { useEffect, useState } from 'react';
import apiKey  from '../config/key';

export default function useFetch() {
  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ mainSearch, setMainSearch ] = useState(false);

  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
  }

  const getComponent = () => {
    getVideo()
    setMainSearch(true);
    localStorage.setItem('mainSearch', 'true')
  }

  useEffect(() => {
    if (localStorage.getItem('mainSearch')) {
      setMainSearch(true);
    } 
  }, [])

  return { mainSearch, setMainSearch, inputValue, setInputValue, getVideo, getComponent }
}
