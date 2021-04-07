import { ResultsContainer, ResultsHeader, ResultsText, ResultsTitle, ResultsNumber, ResultsButtons, ResultsBtn, ResultsContent } from '../styles/results'
import { VideoItem } from '../components';

export function Results({ video, inputValue }) {
  return(
    <ResultsContainer>
      <ResultsHeader>
        <ResultsText>
          <ResultsTitle>Видео по запросу "{ inputValue }"</ResultsTitle>
          <ResultsNumber>85</ResultsNumber>
        </ResultsText>
        <ResultsButtons>
          <ResultsBtn><img src="img/list.svg" alt="показать в виде списка"/></ResultsBtn>
          <ResultsBtn><img src="img/grid.svg" alt="показать таблицей"/></ResultsBtn>
        </ResultsButtons>
      </ResultsHeader>
      <ResultsContent>
        {
          video.map(item => <VideoItem key={ item.id.videoId } item={ item }/>)
        }
      </ResultsContent>
    </ResultsContainer>
  )
}