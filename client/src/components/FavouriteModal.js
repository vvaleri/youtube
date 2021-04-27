import { useState } from 'react';
import { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons, CancelBtn, SaveBtn } from '../styles/favouriteModal';
import axios from 'axios';

export function FavouriteModal({ setModal }) {

  const [ title, setTitleValue ] = useState('');
  const [ name, setNameValue ] = useState('');
  
  const postItem = () => {
    
    const valueText = {
      title,
      name
    }

   axios.post('http://localhost:5000/items/add', valueText)
    .then(res => console.log(res.data))
  }

  return(
    <ModalMain>
      <ModalContainer>
        <ModalTitle>Сохранить запрос</ModalTitle>
        <ModalBox>
          <Label htmlFor="title">Запрос</Label>
          <Input value={ title } onChange={ e => setTitleValue(e.target.value) } id="title"/>
        </ModalBox>
        <ModalBox>
          <Label htmlFor="name"><span>*</span> Название</Label>
          <Input value={ name } onChange={ e => setNameValue(e.target.value) } id="name" placeholder="Укажите название"/>
        </ModalBox>
        <ModalBox>
          <Label htmlFor="sort">Сортировать по</Label>
          <Input id="sort" placeholder="Без сортировки"/>
        </ModalBox>
        <ModalBox>
          <Label htmlFor="range">Максимальное количество</Label>
          <Input id="range" type="range"/>
        </ModalBox>
        <ModalButtons>
          <CancelBtn onClick={ () => setModal(false) }>Не сохранять</CancelBtn>
          <SaveBtn onClick={ postItem } >Сохранить</SaveBtn>
        </ModalButtons>
      </ModalContainer>
    </ModalMain>
  )
}