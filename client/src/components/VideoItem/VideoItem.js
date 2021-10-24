import { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews } from './videoItemStyles';

export const VideoItem = ({ item, classItem }) => (
  <ItemContainer className={classItem}>
    <ItemImg className={classItem}>
      <img className={classItem} src={item.snippet.thumbnails.medium.url} alt="video preview" />
    </ItemImg>
    <ItemContent>
      <ItemTitle>{ item.snippet.title }</ItemTitle>
      <ItemText>{ item.snippet.description}</ItemText>
      <ItemViews>786 тыс. просмотров</ItemViews>
    </ItemContent>
  </ItemContainer>
);
