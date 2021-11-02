import styled, { css } from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;

  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  transform: scale(1.2);
  visibility: hidden;
  opacity: 0;
  z-index: 20;

  &::-webkit-scrollbar {
    display: none;
  }

  &.visible {
    transform: scale(1);
    visibility: visible;
    opacity: 1;
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 60px 40px;

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 510px;
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 10px;

`;

export { Container, Wrap, Overlay, Content };
