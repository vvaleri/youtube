import styled, { css } from 'styled-components';

const Container = styled.div`
  position: absolute;
  color: #ff4040;
  bottom: 0;

  ${props => props.login && css`
        bottom: 75px;

       @media (max-width: 767px) {
         bottom: 53px;
         font-size: 14px;
       }
  `}

  ${props => props.search && css`
        bottom: -20px;

       @media (max-width: 767px) {
         font-size: 14px;
       }
  `}

  ${props => props.favourites && css`
        top: 40px;

       @media (max-width: 767px) {
         top: 35px;
         font-size: 14px;
       }
  `}
`;

export { Container };
