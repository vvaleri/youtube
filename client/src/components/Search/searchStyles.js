import styled from 'styled-components/macro';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 100vh;
  min-height: 350px;

  &.active {
    justify-content: flex-start;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  max-width: 1080px;

  @media (max-width: 767px) {
      width: 100%;
  }

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

  @media (max-width: 767px) {
    margin-bottom: 20px;
    font-size: 26px;
  }

  &.active {
    margin-bottom: 10px;
    font-size: 28px;
    line-height:40px;
  }
`;

const SearchInner = styled.form`
  display: flex;
  position: relative;
  width: 100%;
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

  @media (max-width: 767px) {
    right: 130px;
    top: 12px;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
  }
`;

export { Main,
  SearchContainer,
  SearchTitle,
  SearchInner,
  LikeBtn };
