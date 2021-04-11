import styled from 'styled-components/macro';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  background-color: #fff;
`

const Inner = styled.div`
  display: flex;
  max-width: 1040px;
  padding: 10px;
  margin: 0 auto;
`

const Logo = styled.div`
  margin: 0 60px 0 0;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;
`

const Menu = styled.ul`
  display: flex;
`

const Item = styled.li`
  margin: 0 40px 0 0;

  :last-child {
    margin: 0;
  }

  a {
    padding: 0 0 25px 0;
    font-size: 18px;
    line-height: 28px;
    color: #272727;
    opacity: 0.3;

    &.active {
      color: #1390E5;
      border-bottom: 1px solid #1390E5;
      opacity: 1;
    }
  }

`

export { HeaderContainer, Inner, Nav, Menu, Item, Logo }