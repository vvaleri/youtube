import { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews } from '../styles/videoItem';

export function VideoItem() {
  return(
    <ItemContainer>
      <ItemImg></ItemImg>
      <ItemContent>
        <ItemTitle>Как кормить кошку натуралкой | Перечень полезных для кош...</ItemTitle>
        <ItemText>Ветеринария и Кормление соб.</ItemText>
        <ItemViews>786 тыс. просмотров</ItemViews>
      </ItemContent>
    </ItemContainer>
  )
}