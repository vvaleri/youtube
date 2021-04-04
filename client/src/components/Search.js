import { Results } from '../components';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, LikeBtn, SearchBtn } from '../styles/search';
import { useState } from 'react';

export function Search() {

  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ classActive, setClassActive ] = useState('');

  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
    setClassActive('active')
  }

  return (
    <Main className={ classActive }>
      <SearchContainer className={ classActive }>
        <SearchTitle className={ classActive }>Поиск видео</SearchTitle>
        <SearchInner>
          <SearchInput 
            className={ classActive }
            type='text'
            placeholder='Что хотите посмотреть?'
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
          />
          {/* <LikeBtn><img src="img/like.svg" alt="кнопка сохранить поиск"/></LikeBtn> */}
          <SearchBtn className={ classActive } onClick={ getVideo }>Найти</SearchBtn>
        </SearchInner>
      </SearchContainer>
      
      {/* <Results/> */}
      
    </Main>  
  )
}