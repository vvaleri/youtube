import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
`

const Logo = styled.div`
  margin: 0 60px 0 0;
`

const Nav = styled.nav`
  display: flex;
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
    font-size: 18px;
    line-height: 28px;
    color: #1390E5;
  }
`

export { Container, Nav, Menu, Item, Logo }