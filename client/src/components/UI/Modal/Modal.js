import { Container, Wrap, Overlay, Content } from './modalStyles';

export const Modal = ({ active, setActive, allowScroll, children }) => {
  const closeModal = () => {
    setActive(false);
    allowScroll();
  };

  return (
    <Container className={active ? 'visible' : ''}>
      <Wrap>
        <Overlay onClick={closeModal} />
        <Content>{children}</Content>
      </Wrap>
    </Container>
  );
};
