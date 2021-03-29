import styled from 'styled-components/macro';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 120px 20px 0;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1060px;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0 0 40px 0;
`

const SearchTitle = styled.h1`
  margin: 0 0 10px 0;
  font-size: 28px;
  line-height:40px;
`

const SearchInner = styled.div`
  display: flex;
  position: relative;
`

const SearchInput = styled.input`
  width: 870px;
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

  :focus {
    outline: none;
    border: 1px solid #1390E5;
    background-color: rgba(197, 228, 249, 0.3);
  }
`

const LikeBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 165px;
  border: none;
  background: none;
`

const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  padding: 14px 50px;
  max-width: 150px;
  color: #fff;
  font-size: 20px;
  background-color: #1390E5;
  border: 1px solid #1390E5;
  border-radius: 0 5px 5px 0;
`

export { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, LikeBtn, SearchBtn }