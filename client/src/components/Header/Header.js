import { NavLink } from 'react-router-dom';
import { HeaderContainer, Inner, Logo, Nav, Menu, Item } from './headerStyles';
import Icon from '../../img/logo.svg';

export const Header = () => {
  const menuItems = [
    { to: '/search', name: 'Поиск' },
    { to: '/favourites', name: 'Избранное' }
  ];

  return (
    <HeaderContainer>
      <Inner>
        <Logo><img src={Icon} alt="логотип" /></Logo>
        <Nav>
          <Menu>
            {
              menuItems.map(item => (
                <Item key={item.name}>
                  <NavLink exact to={item.to}>{item.name}</NavLink>
                </Item>
              ))
            }
          </Menu>
          <Menu>
            <Item key="Выйти">
              <NavLink exact to="/" className="auth">Выйти</NavLink>
            </Item>
          </Menu>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
};
