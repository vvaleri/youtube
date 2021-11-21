import { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, Link } from './videoItemStyles';

export const VideoItem = ({ item, classItem }) => (
  <ItemContainer className={classItem}>
    <ItemImg className={classItem}>
      <img
        className={classItem}
        src={item.snippet.thumbnails.medium.url}
        alt="video preview"
      />
    </ItemImg>
    <ItemContent>
      <ItemTitle>
        <Link
          href={`https://youtu.be/${item.id.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          { item.snippet.title }
        </Link>
      </ItemTitle>
      <ItemText>{ item.snippet.description}</ItemText>
    </ItemContent>
  </ItemContainer>
);
