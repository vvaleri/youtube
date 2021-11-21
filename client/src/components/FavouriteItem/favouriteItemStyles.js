import styled from 'styled-components/macro';

const FavouriteContainer = styled.ul`
  background-color: #fff;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 1px solid #e2e3e1;
  transition: background-color 0.3s;
  cursor: pointer;

  @media (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      background-color: #f0f8ff;

      button {
      opacity: 1;
     }
    }
  }
 
`;

const Buttons = styled.div`
  display: flex;
  margin-left: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Btn = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  background-color: transparent;
  color: #0057fa;
  cursor: pointer;
  transition: color 0.3s, opacity 0.3s;
  opacity: 0;

  @media (max-width: 1024px) {
    opacity: 1;
  }

  @media (max-width: 767px) {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    text-align: start;
  }

  &:first-child {
    margin-right: 20px;

    @media (max-width: 767px) {
      margin-right: 0;
    }
  }

  @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      color: #1390E5;
    }
  }
`;

export { FavouriteContainer, Item, Buttons, Btn };
