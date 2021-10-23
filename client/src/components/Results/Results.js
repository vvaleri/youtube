import { useState } from 'react';
import { Container, Header, Text, Title, Buttons, Btn, Content } from './resultsStyles';
import { VideoItem } from '../VideoItem/VideoItem';

export function Results({ video, inputValue, resultClass }) {
  const [classItem, setClassItem] = useState('');

  return (
    <Container>
      <Header className={resultClass}>
        <Text>
          <Title>
            Видео по запросу &quot;
            { inputValue }
            &quot;
          </Title>
        </Text>
        <Buttons>
          <Btn className={classItem} onClick={() => setClassItem('list')}><img src="img/list.svg" alt="показать в виде списка" /></Btn>
          <Btn className={classItem} onClick={() => setClassItem('')}><img src="img/grid.svg" alt="показать таблицей" /></Btn>
        </Buttons>
      </Header>
      <Content>
        {
          video.map(item => <VideoItem key={item.id.videoId} item={item} classItem={classItem} />)
        }
      </Content>
    </Container>
  );
}
