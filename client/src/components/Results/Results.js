import { ResultsContainer, ResultsHeader, ResultsText, ResultsTitle, ResultsButtons, ResultsBtn, ResultsContent } from './resultsStyles'
import { VideoItem } from '../../components';
import { useState } from 'react';

export function Results({ video, inputValue, resultClass }) {
  
  const [ classItem, setClassItem ] = useState('');

  return(
    <ResultsContainer>
      <ResultsHeader className={ resultClass }>
        <ResultsText>
          <ResultsTitle>Видео по запросу "{ inputValue }"</ResultsTitle>
        </ResultsText>
        <ResultsButtons>
          <ResultsBtn className={ classItem } onClick={ () => setClassItem('list') }><img src="img/list.svg" alt="показать в виде списка"/></ResultsBtn>
          <ResultsBtn className={ classItem } onClick={ () => setClassItem('') }><img src="img/grid.svg" alt="показать таблицей"/></ResultsBtn>
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