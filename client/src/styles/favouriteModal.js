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
  font-size: 16px;
  line-height: 22px;
`

const Input = styled.input`
  width: 430px;
  padding: 12px 15px;
  background: #FAFAFA;
  border: 1px solid rgba(23, 23, 25, 0.1);
  border-radius: 5px;

  ::placeholder {
    font-size: 20px;
    color: #272727;
    opacity: 0.3;
  
  }
`

const ModalButtons = styled.div`
  display: flex;
`

const SaveBtn = styled.button`
  padding: 14px 20px;
  font-size: 20px;
  border: 1px solid #1390E5;
  border-radius: 5px;
  background: none;
`

export { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons, SaveBtn }