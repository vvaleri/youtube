import styled from 'styled-components/macro';

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 28px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 32px;
    font-size: 16px;

    @media (max-width: 767px) {
      flex: 1 1 auto;
    }
  }

  button:first-child {
    @media (max-width: 767px) {
      margin-right: 10px;
    }
  }
`;

export { Text, Buttons };
