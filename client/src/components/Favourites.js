import { Main, FavouriteTitle, FavouriteContainer, FavouriteItem } from '../styles/favourites';

export function Favourites() {
  return(
    <Main>
      <FavouriteTitle>Избранное</FavouriteTitle>
      <FavouriteContainer>
        <FavouriteItem>example</FavouriteItem>
      </FavouriteContainer>
    </Main>
  )
}