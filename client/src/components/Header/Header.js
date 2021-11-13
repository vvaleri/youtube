import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HeaderContainer, Inner, Logo, Nav, Menu, Item } from './headerStyles';
import Icon from '../../img/logo.svg';
import { logoutUser } from '../../store/reducers/userReducer';

export const Header = () => {
  const menuItems = [
    { to: '/search', name: 'Поиск' },
    { to: '/favourites', name: 'Избранное' }
  ];
  const dispatch = useDispatch();

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
              <button type="button" className="auth" onClick={() => dispatch(logoutUser())}>Выйти</button>
            </Item>
          </Menu>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
};
