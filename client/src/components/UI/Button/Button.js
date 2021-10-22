import { MainButton } from './buttonStyles';

export const Button = ({ children, ...props }) => {
  return (
    <MainButton { ...props }>{children}</MainButton>
  )
}