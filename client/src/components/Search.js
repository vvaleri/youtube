import { Results } from '../components';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, SearchBtn } from '../styles/search';

export function Search() {
  return (
    <Main>
      <SearchContainer>
        <SearchTitle>Поиск видео</SearchTitle>
        <SearchInner>
          <SearchInput placeholder='Что хотите посмотреть?'/>
          <SearchBtn>Найти</SearchBtn>
        </SearchInner>
      </SearchContainer>
      <Results/>
    </Main>  
  )
}