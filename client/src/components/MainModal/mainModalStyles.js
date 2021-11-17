import styled from 'styled-components/macro';

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
`;

export { ModalTitle, Label, ModalButtons };
