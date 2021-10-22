import { useState } from 'react';
import { ModalMain, ModalContainer, ModalTitle, ModalBox, Label, Input, ModalButtons } from './favouriteModalStyles';
import { Button } from '../UI/Button/Button';
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
    .then((res) => {
      if ( res.ok) {
        alert('Пожалуйста, повторите запрос')
      } else {
        setModal(false)
      }
    })
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
          <Button white onClick={ () => setModal(false) }>Не сохранять</Button>
          <Button onClick={ postItem } >Сохранить</Button>
        </ModalButtons>
      </ModalContainer>
    </ModalMain>
  )
}