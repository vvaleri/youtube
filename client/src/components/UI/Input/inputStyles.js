import styled, { css } from 'styled-components';

const MainInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 14px 15px;
  font-size: 18px;
  border: 1px solid #D1D1D1;
  border-radius: 5px;


  ::placeholder {
    font-size: 18px;
    color: #272727;
    opacity: 0.3;

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }

  :focus {
    outline: none;
    border: 1px solid #1390E5;
    background-color: rgba(197, 228, 249, 0.3);
  }

  ${props => props.search && css`
      width: 536px; 
      height: 52px;
      border-radius: 5px 0 0 5px;

      @media (max-width: 767px) {
        width: 100%;
        height: 45px;
        padding-left: 10px;

        ::placeholder {
          font-size: 12px;
        }
      }

       &.active {
        width: 910px;
        padding-right: 50px;

        @media (max-width: 767px) {
          width: 100%;
        }
      }
  `}
`;

export { MainInput };
