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
  border-bottom: 1px solid #F1F1F1;
  cursor: pointer;

  &:hover {
    background-color: #f0f8ff;

    button {
      opacity: 1;
    }
  }
 
`;
const Buttons = styled.div`
  
`;

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
`;

const ModalTitle = styled.h2`
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;

  span {
    &:before {
      content: '*';
      margin-right: 3px;
      color: #FF0000; 
    }
  }
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export { FavouriteContainer, Item, Buttons, Btn, ModalTitle, Label, ModalButtons };