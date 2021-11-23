import { Container } from './errortooltipStyle';

export const ErrorTooltip = ({ children, ...props }) => (
  <Container {...props}>
    {children}
  </Container>
);
