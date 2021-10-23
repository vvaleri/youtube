import { MainButton } from './buttonStyles';

export const Button = ({ children, ...props }) => (
  <MainButton {...props}>{children}</MainButton>
);
