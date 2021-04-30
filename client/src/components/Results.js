import { ResultsContainer, ResultsHeader, ResultsText, ResultsTitle, ResultsButtons, ResultsBtn, ResultsContent } from '../styles/results'
import { VideoItem } from '../components';
import { useState } from 'react';

export function Results({ video, inputValue }) {
  
  const [ classItem, setClassItem ] = useState('');

  return(
    <ResultsContainer>
      <ResultsHeader>
        <ResultsText>
          <ResultsTitle>Видео по запросу "{ inputValue }"</ResultsTitle>
  
        </ResultsText>
        <ResultsButtons>
          <ResultsBtn onClick={ () => setClassItem('list') }><img src="img/list.svg" alt="показать в виде списка"/></ResultsBtn>
          <ResultsBtn onClick={ () => setClassItem('') }><img src="img/grid.svg" alt="показать таблицей"/></ResultsBtn>
        </ResultsButtons>
      </ResultsHeader>
      <ResultsContent>
        {
          video.map(item => <VideoItem key={ item.id.videoId } item={ item } classItem={ classItem }/>)
        }
      </ResultsContent>
    </ResultsContainer>
  )
}