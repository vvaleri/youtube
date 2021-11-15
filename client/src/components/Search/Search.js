/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '..';
import { Results } from '../Results/Results';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Modal } from '../UI/Modal/Modal';
import { Main, SearchContainer, SearchTitle, SearchInner, LikeBtn, ModalTitle, Label, ModalButtons } from './searchStyles';
import useScrollBlock from '../../hooks/useScrollBlock';
import apiKey from '../../config/key';
import LikeIcon from '../../img/like.svg';
import { searchVideo } from '../../actions/videoAction';
import { addItem } from '../../actions/favouritesAction';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [title, setTitleValue] = useState('');
  const [name, setNameValue] = useState('');

  const dispatch = useDispatch();
  const { results, isActive } = useSelector(state => state.videoReducer);
  const { user } = useSelector(state => state.userReducer);

  const openModal = () => {
    setModalActive(true);
    blockScroll();
  };

  const postItem = () => {
    const valueText = {
      title,
      name,
      userEmail: user.email
    };

    dispatch(addItem(valueText));
    setModalActive(false);
    allowScroll();
  };

  return (
    <>
      <Header />
      <Main>
        <SearchContainer className={isActive ? 'active' : ''}>
          <SearchTitle className={isActive ? 'active' : ''}>Поиск видео</SearchTitle>
          <SearchInner>
            <Input
              search
              className={isActive ? 'active' : ''}
              type="text"
              placeholder="Что хотите посмотреть?"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            {/* {
              isActive && <LikeBtn onClick={openModal}><img src={LikeIcon} alt="кнопка сохранить поиск" /></LikeBtn>
            } */}

            <LikeBtn onClick={openModal}><img src={LikeIcon} alt="кнопка сохранить поиск" /></LikeBtn>

            <Button main onClick={() => dispatch(searchVideo(inputValue, apiKey))}>Найти</Button>
          </SearchInner>
          {
          results && <Results inputValue={inputValue} />
          }
        </SearchContainer>
        <Modal
          active={modalActive}
          setActive={setModalActive}
          allowScroll={allowScroll}
        >
          <ModalTitle>Сохранить запрос</ModalTitle>
          <Label>
            <span>Запрос</span>
            <Input value={title} onChange={e => setTitleValue(e.target.value)} />
          </Label>
          <Label>
            <span>Название</span>
            <Input value={name} onChange={e => setNameValue(e.target.value)} placeholder="Укажите название" />
          </Label>
          <ModalButtons>
            <Button white onClick={() => setModalActive(false)}>Не сохранять</Button>
            <Button onClick={postItem}>Сохранить</Button>
          </ModalButtons>
        </Modal>
      </Main>
    </>
  );
};
