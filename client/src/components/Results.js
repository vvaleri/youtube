import { ResultsContainer, ResultsHeader, ResultsText, ResultsTitle, ResultsNumber, ResultsButtons, ResultsBtn } from '../styles/results'

export function Results() {
  return(
    <ResultsContainer>
      <ResultsHeader>
        <ResultsText>
          <ResultsTitle>Видео по запросу ""</ResultsTitle>
          <ResultsNumber>85</ResultsNumber>
        </ResultsText>
        <ResultsButtons>
          <ResultsBtn><img src="img/list.svg" alt="показать в виде списка"/></ResultsBtn>
          <ResultsBtn><img src="img/grid.svg" alt="показать таблицей"/></ResultsBtn>
        </ResultsButtons>
      </ResultsHeader>
    </ResultsContainer>
  )
}