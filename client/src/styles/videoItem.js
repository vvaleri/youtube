import styled from 'styled-components/macro';

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(25% - 20px);
  margin: 0 20px 30px 0;
`

const ItemImg = styled.div`
  width: 245px;
  height: 138px;
  border: 1px solid #1390E5;
  margin-bottom: 8px;

  img {
    width: 245px;
    height: 138px;
  }
`

const ItemContent = styled.div`
  font-size: 14px;
  line-height: 16px; 
`

const ItemTitle = styled.h2`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 8px;
`

const ItemText = styled.p`
  color: rgba(23, 23, 25, 0.3);
` 

const ItemViews = styled.div`
  color: rgba(23, 23, 25, 0.3);
`

export { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, ItemViews }