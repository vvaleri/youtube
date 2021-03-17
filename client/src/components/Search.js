import { useState } from 'react';
import { Results } from '../components';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, SearchBtn } from '../styles/search';
import apiKey  from '../config/key';

export function Search() {

  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  
  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
  }

  return (
    <Main>
      <SearchContainer>
        <SearchTitle>Поиск видео</SearchTitle>
        <SearchInner>
          <SearchInput 
            type='text'
            placeholder='Что хотите посмотреть?'
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
          />
          <SearchBtn onClick={ getVideo }>Найти</SearchBtn>
        </SearchInner>
      </SearchContainer>
      <Results/>
    </Main>  
  )
}