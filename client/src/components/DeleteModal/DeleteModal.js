import axios from 'axios';
import { Overlay, Container, Text, Buttons, CancelBtn, SaveBtn } from './deleteModalStyles';

export function DeleteModal({ id, setDeleteModal }) {
  const deleteItem = () => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(res => console.log(res.data));
  };

  return (
    <Overlay>
      <Container>
        <Text>Вы действительно хотите удалить этот запрос?</Text>
        <Buttons>
          <CancelBtn onClick={() => setDeleteModal(false)}>Отмена</CancelBtn>
          <SaveBtn onClick={deleteItem}>Удалить</SaveBtn>
        </Buttons>
      </Container>
    </Overlay>
  );
}
