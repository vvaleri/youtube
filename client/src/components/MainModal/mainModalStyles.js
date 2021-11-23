import styled, { css } from 'styled-components/macro';

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

  @media (max-width: 767px) {
    font-size: 16px;
  }

  ${props => props.last && css`
        margin-bottom: 40px;
  `}

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

  button {
    @media (max-width: 767px) {
      width: 100%;
      flex: 1 1 auto;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  button:first-child {
    @media (max-width: 767px) {
      margin-right: 10px;
    }
  }
`;

export { ModalTitle, Label, ModalButtons };
