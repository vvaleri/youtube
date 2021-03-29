import { Search } from '../components';
import { Main, IntroContainer, IntroTitle, IntroInner, IntroInput, IntroBtn } from '../styles/introSearch';
import useFetch from '../hooks/useFetch';

export function IntroSearch() {
    const { mainSearch, inputValue, setInputValue, getComponent } = useFetch();

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
            <IntroBtn onClick={ getComponent }>Найти</IntroBtn>
          </IntroInner>
        </IntroContainer>
      </Main>
    )
}