import styled from 'styled-components/macro';

const Main = styled.main`
   padding: 120px 20px 20px;
   max-width: 1080px;
   min-height: 100vh;
   margin: 0 auto;
`;

const FavouriteTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
  line-height: 40px;

  @media (max-width: 767px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const Head = styled.div`
  position: relative;
`;

const Text = styled.p`
  font-size: 18px;
  color: #B5B8B1;
`;

export { Main, FavouriteTitle, Text, Head };
