import { Search } from '../components';
import { Main, IntroContainer, IntroTitle, IntroInner, IntroInput, IntroBtn } from '../styles/introSearch';
import useFetch from '../hooks/useFetch';
import { useEffect } from 'react';

export function IntroSearch() {
    const { mainSearch, inputValue, setInputValue, getVideo } = useFetch();

    return mainSearch ? (<Search/>) : (
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
      </Main>
    )
}