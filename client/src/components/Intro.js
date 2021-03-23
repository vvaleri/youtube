import { useState } from 'react';
import { Results } from '.';
import { Main, IntroContainer, IntroTitle, IntroInner, IntroInput, IntroBtn } from '../styles/intro';
import apiKey  from '../config/key';

export function Intro() {

  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  
  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json();
    setVideo(result)
  }

  return (
    <Main>
      <IntroContainer>
        <IntroTitle>Поиск видео</IntroTitle>
        <IntroInner>
          <IntroInput 
            type='text'
            placeholder='Что хотите посмотреть?'
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
          /> 
          <IntroBtn onClick={ getVideo }>Найти</IntroBtn>
        </IntroInner>
      </IntroContainer>
      <Results/>
    </Main>  
  )
}