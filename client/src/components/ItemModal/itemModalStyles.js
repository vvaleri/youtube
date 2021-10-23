import styled, { css } from 'styled-components';

const ModalTitle = styled.h2`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;

  span {
    color: #FF0000;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { ModalTitle, ModalBox, Label, ModalButtons };
