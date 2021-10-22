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
  background-color: rgba(94, 111, 127, 0.9);;

`

const ModalContainer = styled.div`
  display: flex;
  min-width: 500px;
  flex-direction: column;
  padding: 36px 40px;
  background-color: #fff;
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

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, ModalButtons }