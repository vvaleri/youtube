import styled from 'styled-components/macro';

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column; 
   width: calc(25% - 20px);
  margin: 0 20px 30px 0;
  cursor: pointer;

  &.list {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;

const ItemImg = styled.div`
  display: flex; 
  border: 1px solid #1390E5;
  margin-bottom: 8px;

  img {
    max-width: 245px;

    &.list {
      max-width: 157px;
    }
  }

  &.list {
    margin-right: 20px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  line-height: 16px; 
`;

const ItemTitle = styled.h2`
  flex-grow: 1;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`;

const ItemText = styled.p`
  flex-grow: 1;
  color: rgba(23, 23, 25, 0.3);
`;

const ItemViews = styled.div`
  color: rgba(23, 23, 25, 0.3);
`;

export { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews };
