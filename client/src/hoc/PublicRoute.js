import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props => localStorage.getItem('token')
      ? <Redirect to="/search" />
      : (
        <Component {...props} />
      )}
  />
);
