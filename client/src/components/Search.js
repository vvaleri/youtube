import { Results } from '../components';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, SearchBtn } from '../styles/search';
import useFetch from '../hooks/useFetch';

export function Search() {

  const { inputValue, setInputValue, getVideo } = useFetch();

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