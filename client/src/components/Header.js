import { NavLink } from 'react-router-dom';
import { Container, Logo, Nav, Menu, Item } from '../styles/header';

export function Header() {

    const menuItems = [
      { to: '/', name: 'Поиск' },
      { to: '/favourites', name: 'Избранное' }
    ]

    return (
      <Container>
        <Logo><img src="img/logo.svg" alt="логотип"/></Logo>
        <Nav>
          <Menu>
            {
              menuItems.map(item => 
                <Item key={ item.name }>
                  <NavLink exact to={ item.to }>{item.name}</NavLink>
                </Item>
              )
            }
          </Menu>
        </Nav>
      </Container>
    )
}