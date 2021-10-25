import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
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

export const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [classActive, setClassActive] = useState('');
  const [results, setResult] = useState(true);
  const [resultClass, setResultClass] = useState('');

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [title, setTitleValue] = useState('');
  const [name, setNameValue] = useState('');

  const dispatch = useDispatch();

  // const getVideo = async () => {
  //   setClassActive('active');
  //   setResult(true);
  //   setResultClass('active');
  //   // localStorage.setItem('classResult', 'true');
  // };

  // useEffect(() => {
  //   if (localStorage.getItem('classResult')) {
  //     setClassActive('active');
  //     setResult(true);
  //   }
  // }, []);

  const openModal = () => {
    setModalActive(true);
    blockScroll();
  };

  const postItem = () => {
    const valueText = {
      title,
      name
    };

    axios.post('http://localhost:5000/items/add', valueText)
      .then(res => {
        if (res.ok) {
          alert('Пожалуйста, повторите запрос');
        } else {
          setModalActive(false);
          allowScroll();
        }
      });
  };

  return (
    <>
      <Header />
      <Main className={classActive}>
        <SearchContainer className={classActive}>
          <SearchTitle className={classActive}>Поиск видео</SearchTitle>
          <SearchInner>
            <Input
              search
              className={classActive}
              type="text"
              placeholder="Что хотите посмотреть?"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <LikeBtn className={classActive} onClick={openModal}><img src={LikeIcon} alt="кнопка сохранить поиск" /></LikeBtn>
            <Button main onClick={() => dispatch(searchVideo(inputValue, apiKey))}>Найти</Button>
          </SearchInner>
          {
          results && <Results inputValue={inputValue} resultClass={resultClass} />
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
