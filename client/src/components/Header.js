import { NavLink } from 'react-router-dom';
import { HeaderContainer, Inner, Logo, Nav, Menu, Item } from '../styles/header';

export function Header() {

  const menuItems = [
    { to: '/', name: 'Поиск' },
    { to: '/favourites', name: 'Избранное' }
  ]

    return (
      <HeaderContainer>
        <Inner>
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
            <Menu>
              <Item key={ 'Выйти' }>
                <NavLink exact to={ '/auth' }>Выйти</NavLink>
              </Item>
            </Menu>
          </Nav>
        </Inner>
      </HeaderContainer>
    )
}