import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 5;
`;

const Inner = styled.div`
  display: flex;
  max-width: 1040px;
  padding: 10px 20px;
  margin: 0 auto;
`;

const Logo = styled.div`
  margin-right: 60px;

  @media (max-width: 767px) {
    margin-right: 30px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;
`;

const Menu = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-right: 40px;

  :last-child {
    margin: 0;
  }

  a, button {
    padding-bottom: 25px;
    font-size: 18px;
    line-height: 28px;
    color: #272727;
    opacity: 0.3;

    @media (hover: hover), screen and (min-width: 0\0) {
    :hover,
    :focus {
      color: #0057fa;
    }
   }

    &.active {
      color: #1390E5;
      border-bottom: 1px solid #1390E5;
      opacity: 1;
    }

    &.auth {
      color: #1390E5;
      opacity: 1;

      @media (hover: hover), screen and (min-width: 0\0) {
      :hover,
      :focus {
        color: #0057fa;
      }
     }
    }

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  button {
    padding-bottom: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

`;

export { HeaderContainer, Inner, Nav, Menu, Item, Logo };
