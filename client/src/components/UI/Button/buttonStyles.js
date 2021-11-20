import styled, { css } from 'styled-components';

const MainButton = styled.button`
  display: flex;
  justify-content: center;
  flex: 0 0 200px;
  padding: 14px 35px;
  color: #fff;
  font-size: 20px;
  background-color: #1390E5;
  border: 1px solid #1390E5;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      background-color: #0057fa;
    }
  }

  ${props => props.white && css`
      color: #1390E5;
      background-color: transparent;

      @media (hover: hover), screen and (min-width: 0\0) {
        :hover,
        :focus {
          background-color: #e3f3ff;
        }
      }
  `}

  ${props => props.main && css`
       flex: 0 0 150px;
       border-radius: 0 5px 5px 0;
  `}

  ${props => props.register && css`
       flex: 0 0 auto;
       padding-left: 40px;
       padding-right: 40px;
       margin: 0 auto;
  `}
`;

export { MainButton };
