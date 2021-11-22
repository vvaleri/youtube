import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { HeaderContainer, Inner, Logo, Nav, Menu, Item } from './headerStyles';
import Icon from '../../img/logo.svg';
import { logoutUser } from '../../store/reducers/userReducer';

export const Header = () => {
  const menuItems = [
    { to: '/search', name: 'Поиск' },
    { to: '/favourites', name: 'Избранное' }
  ];
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser());
    dispatch(push('/login'));
  };

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
              <button type="button" className="auth" onClick={logOut}>Выйти</button>
            </Item>
          </Menu>
        </Nav>
      </Inner>
    </HeaderContainer>
  );
};
