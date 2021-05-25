import { Overlay, Container, Text, Buttons, CancelBtn, SaveBtn } from '../styles/deleteModal';

export function DeleteModal({ setDeleteModal }) {
  return (
    <Overlay>
      <Container>
        <Text>Вы действительно хотите удалить этот запрос?</Text>
        <Buttons>
          <CancelBtn onClick={ () => setDeleteModal(false) }>Отмена</CancelBtn>
          <SaveBtn>Удалить</SaveBtn>
        </Buttons>
      </Container>
    </Overlay>
  )
}