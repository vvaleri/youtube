import styled from 'styled-components/macro';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FAFAFA;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 1080px;
`

const SearchTitle = styled.h1`
  margin: 0 0 40px 0;
  font-size: 36px;
  line-height: 52px;
`

const SearchInner = styled.div`
  display: flex;
`

const SearchInput = styled.input`
  width: 536px;
  height: 52px;
  padding: 0 0 0 15px;
  font-size: 20px;
  border: 1px solid #D1D1D1;
  border-radius: 5px 0 0 5px;

  ::placeholder {
    font-size: 20px;
    line-height: 24px;
    color: #272727;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
    border: 1px solid #1390E5;
    background-color: rgba(197, 228, 249, 0.3);
  }
`

const SearchBtn = styled.button`
  padding: 14px 35px;
  max-width: 150px;
  color: #fff;
  font-size: 20px;
  background-color: #1390E5;
  border: 1px solid #1390E5;
  border-radius: 0 5px 5px 0;
`

export { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, SearchBtn }