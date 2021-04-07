import { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews } from '../styles/videoItem';

export function VideoItem( { item }) {
  return(
    <ItemContainer>
      <ItemImg><img src={ item.snippet.thumbnails.medium.url }/></ItemImg>
      <ItemContent>
        <ItemTitle>{ item.snippet.title }</ItemTitle>
        <ItemText>{ item.snippet.description}</ItemText>
        <ItemViews>786 тыс. просмотров</ItemViews>
      </ItemContent>
    </ItemContainer>
  )
}