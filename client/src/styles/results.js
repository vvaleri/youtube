import styled from 'styled-components/macro';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const ResultsText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
`

const ResultsTitle = styled.div`
  margin: 0 15px 0 0;
`

const ResultsNumber = styled.div`
  color: rgba(23, 23, 25, 0.3);
`

const ResultsButtons = styled.div`

`

const ResultsBtn = styled.button`
  margin: 0 0 0 15px;
  border: none;
  background: none;
`

export { ResultsContainer, ResultsHeader, ResultsTitle, ResultsText, ResultsNumber, ResultsButtons, ResultsBtn }