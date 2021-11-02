import styled from 'styled-components/macro';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  min-height: 100vh;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  max-width: 1080px;

  &.active {
    align-items: flex-start;
    padding-top: 120px;
    width: 100%
  }
`;

const SearchTitle = styled.h1`
  margin-bottom: 40px;
  font-size: 36px;
  line-height: 52px;

  &.active {
    margin-bottom: 10px;
    font-size: 28px;
    line-height:40px;
  }
`;

const SearchInner = styled.div`
  display: flex;
  position: relative;
`;

const LikeBtn = styled.button`
  display: block;
  position: absolute;
  top: 15px;
  right: 165px;
  border: none;
  background: none;
  cursor: pointer;
  transition: transform 0.3s;

  @media (hover: hover), screen and (min-width: 0\0) {
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;

  span {
    &:before {
      content: '*';
      margin-right: 3px;
      color: #FF0000; 
    }
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { Main,
  SearchContainer,
  SearchTitle,
  SearchInner,
  LikeBtn,
  ModalTitle,
  Label,
  ModalButtons };
