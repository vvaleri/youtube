import { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons, CancelBtn, SaveBtn } from '../styles/favouriteModal';

export function FavouriteModal({ setModal }) {
  return(
    <ModalMain>
      <ModalContainer>
        <ModalTitle>Сохранить запрос</ModalTitle>
        <ModalBox>
          <Label for="req">Запрос</Label>
          <Input id="req"/>
        </ModalBox>
        <ModalBox>
          <Label for="name"><span>*</span> Название</Label>
          <Input id="name" placeholder="Укажите название"/>
        </ModalBox>
        <ModalBox>
          <Label for="sort">Сортировать по</Label>
          <Input id="sort" placeholder="Без сортировки"/>
        </ModalBox>
        <ModalBox>
          <Label for="range">Максимальное количество</Label>
          <Input id="range" type="range"/>
        </ModalBox>
        <ModalButtons>
          <CancelBtn onClick={ () => setModal(false) }>Не сохранять</CancelBtn>
          <SaveBtn>Сохранить</SaveBtn>
        </ModalButtons>
      </ModalContainer>
    </ModalMain>
  )
}