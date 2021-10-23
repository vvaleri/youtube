import styled from 'styled-components/macro';

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 28px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
`;

const SaveBtn = styled(CancelBtn)`
  padding: 10px 30px;
  color: #fff;
  background-color: #1390E5;

  :hover {
    background-color: #0057fa;
  }
`;

export { Text, Buttons, CancelBtn, SaveBtn };
