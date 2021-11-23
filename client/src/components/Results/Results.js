import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Header, Text, Title, Buttons, Btn, Content } from './resultsStyles';
import { VideoItem } from '../VideoItem/VideoItem';
import ListIcon from '../../img/list.svg';
import GridIcon from '../../img/grid.svg';

export const Results = () => {
  const [classItem, setClassItem] = useState('');
  const { video } = useSelector(state => state.videoReducer);
  const { inputSearch } = useSelector(state => state.searchInputReducer);

  return (
    <Container>
      <Header>
        <Text>
          <Title>
            Видео по запросу &quot;
            { inputSearch }
            &quot;
          </Title>
        </Text>
        <Buttons>
          <Btn className={classItem} onClick={() => setClassItem('list')}><img src={ListIcon} alt="показать в виде списка" /></Btn>
          <Btn className={classItem} onClick={() => setClassItem('')}><img src={GridIcon} alt="показать таблицей" /></Btn>
        </Buttons>
      </Header>
      <Content>
        {
          video.map(item => <VideoItem key={item.id.videoId} item={item} classItem={classItem} />)
        }
      </Content>
    </Container>
  );
};
