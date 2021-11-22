import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...restProps }) => (
  <Route
    {...restProps}
    render={props => localStorage.getItem('token') === null
      ? <Redirect to="/" />
      : (
        <Component {...props} />
      )}
  />
);
