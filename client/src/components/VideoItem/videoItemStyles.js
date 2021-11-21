import styled from 'styled-components/macro';

const ItemContainer = styled.li`
  display: flex;
  flex-direction: column; 
  width: calc(25% - 20px);
  margin-right: 20px;
  margin-bottom: 30px;
  position: relative;
  /* cursor: pointer; */

  @media (max-width: 1023px) {
    width: calc(33.3% - 20px);
  }

  @media (max-width: 767px) {
    width: calc(50% - 10px);
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
  }

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
    width: 100%;
    height: 137px;

    @media (max-width: 480px) {
      height: 150px;
    }

    &.list {
      width: 157px;
      max-width: 157px;
      max-height: 88px;
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

const Link = styled.a`
  color: #000;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ItemText = styled.p`
  flex-grow: 1;
  color: rgba(23, 23, 25, 0.7);
  overflow-wrap: break-word;
`;

export { ItemContainer, ItemImg, ItemContent, ItemTitle, ItemText, Link };
