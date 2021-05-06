import styled from 'styled-components/macro';

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 40px 0 0 0;
`

const ResultsHeader = styled.div`
  /* display: flex; */
  display: none;
  justify-content: space-between;
  margin-bottom: 20px;

  &.active {
    display: flex;
  }
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

const ResultsButtons = styled.div`
  
`

const ResultsBtn = styled.button`
  margin: 0 0 0 15px;
  border: none;
  background: none;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

const ResultsContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-bottom: -20px;
`

export { ResultsContainer, ResultsHeader, ResultsTitle, ResultsText, ResultsButtons, ResultsBtn, ResultsContent }