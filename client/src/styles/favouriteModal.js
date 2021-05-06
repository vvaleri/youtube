import styled from 'styled-components/macro';

const ModalMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #75C7FF;

`

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px 40px;
  background-color: #fff;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
`

const ModalTitle = styled.h2`
  margin: 0 auto 35px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 24px;

  span {
    color: #FF0000;
  }
`

const Input = styled.input`
  width: 430px;
  padding: 14px 15px;
  background: #FAFAFA;
  border: 1px solid rgba(23, 23, 25, 0.1);
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    color: #272727;
    opacity: 0.3;
  }

  :focus {
    outline: none;
    border: 1px solid #1390E5;
    background-color: rgba(197, 228, 249, 0.3);
  }
`

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const CancelBtn = styled.button`
  padding: 12px 40px;
  font-size: 20px;
  color: #1390E5;
  border: 1px solid #1390E5;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transition: background-color 0.3s;

  :hover {
    background-color: #e3f3ff;
  }
`

const SaveBtn = styled(CancelBtn)`
  padding: 12px 50px;
  color: #fff;
  background-color: #1390E5;

  :hover {
    background-color: #0057fa;
  }
`

export { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons, CancelBtn, SaveBtn }