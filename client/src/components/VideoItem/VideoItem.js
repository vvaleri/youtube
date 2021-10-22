import { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews } from './videoItemStyles';

export function VideoItem( { item, classItem }) {
  return(
    <ItemContainer className={ classItem }>
      <ItemImg className={ classItem }><img className={ classItem } src={ item.snippet.thumbnails.medium.url }/></ItemImg>
      <ItemContent>
        <ItemTitle>{ item.snippet.title }</ItemTitle>
        <ItemText>{ item.snippet.description}</ItemText>
        <ItemViews>786 тыс. просмотров</ItemViews>
      </ItemContent>
    </ItemContainer>
  )
}