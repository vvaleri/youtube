import { useState } from 'react';
import { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons, CancelBtn, SaveBtn } from '../styles/favouriteModal';
import axios from 'axios';

export function ChangeModal({ id, dataTitle, dataName, setModal }) {

  const [ title, setTitleValue ] = useState(dataTitle);
  const [ name, setNameValue ] = useState(dataName);
  
  const postItem = () => {
    
    const valueText = {
      title,
      name
    }

   axios.put(`http://localhost:5000/items/update/${ id }`, valueText)
    .then(res => console.log(res.data))
  }

  return(
    <ModalMain>
      <ModalContainer>
        <ModalTitle>Сохранить запрос</ModalTitle>
        <ModalBox>
          <Label htmlFor="title"><span>*</span> Запрос</Label>
          <Input value={ title } onChange={ e => setTitleValue(e.target.value) } id="title"/>
        </ModalBox>
        <ModalBox>
          <Label htmlFor="name"><span>*</span> Название</Label>
          <Input value={ name } onChange={ e => setNameValue(e.target.value) } id="name" placeholder="Укажите название"/>
        </ModalBox>
        <ModalButtons>
          <CancelBtn onClick={ () => setModal(false) }>Отмена</CancelBtn>
          <SaveBtn onClick={ postItem } >Изменить</SaveBtn>
        </ModalButtons>
      </ModalContainer>
    </ModalMain>
  )
}