import styled from 'styled-components/macro';

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(29, 30, 51, 0.8);

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 10px;
`

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 28px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const CancelBtn = styled.button`
  padding: 10px 32px;
  font-size: 16px;
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
  padding: 10px 30px;
  color: #fff;
  background-color: #1390E5;

  :hover {
    background-color: #0057fa;
  }
`

export { Overlay, Container, Text, Buttons, CancelBtn, SaveBtn }