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

const FavouriteContainer = styled.ul`
  background-color: #fff;
`

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #F1F1F1;
  cursor: pointer;

  &:hover {
    background-color: #f0f8ff;

    button {
      opacity: 1;
    }
  }
 
`
const Buttons = styled.div`
  
`

const Btn = styled.button`
  padding: 10px 0;
  border: none;
  background-color: transparent;
  color: #0057fa;
  cursor: pointer;
  transition: color 0.3s;
  opacity: 0;

  &:first-child {
    margin-right: 15px;
  }

  &:hover {
    color: #1390E5;
  }
`

export { Main, FavouriteTitle, FavouriteContainer, Item, Buttons, Btn }