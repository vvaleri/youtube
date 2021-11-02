import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0 0 0;
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
  margin: 0 15px 0 0;
  
`;

const Buttons = styled.div`
  
`;

const Btn = styled.button`
  margin: 0 0 0 15px;
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: 0.5;

  &:last-child {
    opacity: 1;
  }

  &:hover {
    opacity: 0.9;
  }

  &.list {
    opacity: 1;

    &:last-child {
      opacity: 0.5;
    }

    &:hover {
    opacity: 0.9;
    }
  }
`;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-bottom: -20px;
`;

export { Container, Header, Title, Text, Buttons, Btn, Content };
