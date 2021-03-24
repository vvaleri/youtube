import { useState } from 'react';
import { Results } from '.';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, SearchBtn } from '../styles/search';
import apiKey  from '../config/key';

export function Search() {

  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ activeClass, setActiveClass ] = useState(false);
  
  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
    setActiveClass(true);
  }

  return (
    <Main className={ activeClass ? 'active' : '' }>
      <SearchContainer className={ activeClass ? 'active' : '' }>
        <SearchTitle className={ activeClass ? 'active' : '' }>Поиск видео</SearchTitle>
        <SearchInner>
          <SearchInput 
            type='text'
            placeholder='Что хотите посмотреть?'
            className={ activeClass ? 'active' : '' }
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
          /> 
          <SearchBtn className={ activeClass ? 'active' : '' } onClick={ getVideo }>Найти</SearchBtn>
        </SearchInner>
      </SearchContainer>
      <Results/>
    </Main>  
  )
}