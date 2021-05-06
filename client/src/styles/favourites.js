import styled from 'styled-components/macro';

const Main = styled.main`
   padding: 120px 20px 0;
   max-width: 1080px;
   min-height: 100vh;
   margin: 0 auto;
`

const FavouriteTitle = styled.h1`
  margin: 0 0 30px 0;
  font-size: 28px;
  line-height: 40px;
`

const FavouriteContainer = styled.div`
  background-color: #fff;
`

const FavouriteItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  font-weight: 500;
  border-bottom: 1px solid #F1F1F1;
 
`

export { Main, FavouriteTitle, FavouriteContainer, FavouriteItem }