import styled from 'styled-components/macro';

const Container = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 15px 20px;
  background-color: #fff;
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
    font-size: 18px;
    line-height: 28px;
    color: #1390E5;
  }
`

export { Container, Nav, Menu, Item, Logo }