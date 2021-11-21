import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
`;

const Title = styled.div`
  max-width: 800px;
  
`;

const Buttons = styled.div`
  flex: 0 0 50px;

  @media (max-width: 767px) {
    display: none;
  }
`;

const Btn = styled.button`
  margin-bottom: 15px;
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.5;

  &:last-child {
    opacity: 1;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    &:hover,
    &:focus {
      opacity: 0.9;
    }
   }

  &.list {
    opacity: 1;

    &:last-child {
      opacity: 0.5;
    }

    @media (hover: hover), screen and (min-width: 0\0) {
      &:hover,
      &:focus {
        opacity: 0.9;
      }
    }
  }
`;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-bottom: -20px;

  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export { Container, Header, Title, Text, Buttons, Btn, Content };
