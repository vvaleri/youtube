import styled from 'styled-components/macro';

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 5;
`;

const Main = styled.div`
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load 1.1s infinite ease;
  animation: load 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  
  @keyframes load {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #41b1c8, 1.8em -1.8em 0 0em rgba(65,177,200, 0.2), 2.5em 0em 0 0em rgba(65,177,200, 0.2), 1.75em 1.75em 0 0em rgba(65,177,200, 0.2), 0em 2.5em 0 0em rgba(65,177,200, 0.2), -1.8em 1.8em 0 0em rgba(65,177,200, 0.2), -2.6em 0em 0 0em rgba(65,177,200, 0.5), -1.8em -1.8em 0 0em rgba(65,177,200, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.7), 1.8em -1.8em 0 0em #41b1c8, 2.5em 0em 0 0em rgba(65,177,200, 0.2), 1.75em 1.75em 0 0em rgba(65,177,200, 0.2), 0em 2.5em 0 0em rgba(65,177,200, 0.2), -1.8em 1.8em 0 0em rgba(65,177,200, 0.2), -2.6em 0em 0 0em rgba(65,177,200, 0.2), -1.8em -1.8em 0 0em rgba(65,177,200, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.5), 1.8em -1.8em 0 0em rgba(65,177,200, 0.7), 2.5em 0em 0 0em #41b1c8, 1.75em 1.75em 0 0em rgba(65,177,200, 0.2), 0em 2.5em 0 0em rgba(65,177,200, 0.2), -1.8em 1.8em 0 0em rgba(65,177,200, 0.2), -2.6em 0em 0 0em rgba(65,177,200, 0.2), -1.8em -1.8em 0 0em rgba(65,177,200, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.2), 1.8em -1.8em 0 0em rgba(65,177,200, 0.5), 2.5em 0em 0 0em rgba(65,177,200, 0.7), 1.75em 1.75em 0 0em #41b1c8, 0em 2.5em 0 0em rgba(65,177,200, 0.2), -1.8em 1.8em 0 0em rgba(65,177,200, 0.2), -2.6em 0em 0 0em rgba(65,177,200, 0.2), -1.8em -1.8em 0 0em rgba(65,177,200, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.2), 1.8em -1.8em 0 0em rgba(65,177,200, 0.2), 2.5em 0em 0 0em rgba(65,177,200, 0.5), 1.75em 1.75em 0 0em rgba(65,177,200, 0.7), 0em 2.5em 0 0em #41b1c8, -1.8em 1.8em 0 0em rgba(65,177,200, 0.2), -2.6em 0em 0 0em rgba(65,177,200, 0.2), -1.8em -1.8em 0 0em rgba(65,177,200, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.2), 1.8em -1.8em 0 0em rgba(65,177,200, 0.2), 2.5em 0em 0 0em rgba(65,177,200, 0.2), 1.75em 1.75em 0 0em rgba(65,177,200, 0.5), 0em 2.5em 0 0em rgba(65,177,200, 0.7), -1.8em 1.8em 0 0em #41b1c8, -2.6em 0em 0 0em rgba(65,177,200, 0.2), -1.8em -1.8em 0 0em rgba(65,177,200, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.2), 1.8em -1.8em 0 0em rgba(65,177,200, 0.2), 2.5em 0em 0 0em rgba(65,177,200, 0.2), 1.75em 1.75em 0 0em rgba(65,177,200, 0.2), 0em 2.5em 0 0em rgba(65,177,200, 0.5), -1.8em 1.8em 0 0em rgba(65,177,200, 0.7), -2.6em 0em 0 0em #41b1c8, -1.8em -1.8em 0 0em rgba(65,177,200, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(65,177,200, 0.2), 1.8em -1.8em 0 0em rgba(65,177,200, 0.2), 2.5em 0em 0 0em rgba(65,177,200, 0.2), 1.75em 1.75em 0 0em rgba(65,177,200, 0.2), 0em 2.5em 0 0em rgba(65,177,200, 0.2), -1.8em 1.8em 0 0em rgba(65,177,200, 0.5), -2.6em 0em 0 0em rgba(65,177,200, 0.7), -1.8em -1.8em 0 0em #41b1c8;
  }
}
`;

export { Container, Main };
