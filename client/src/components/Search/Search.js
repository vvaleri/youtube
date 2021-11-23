import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '..';
import { Results } from '../Results/Results';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { Main, SearchContainer, SearchTitle, SearchInner, LikeBtn } from './searchStyles';
import useScrollBlock from '../../hooks/useScrollBlock';
import apiKey from '../../config/key';
import LikeIcon from '../../img/like.svg';
import { searchVideo } from '../../actions/videoAction';
import { addItem } from '../../actions/favouritesAction';
import { MainModal } from '../MainModal/MainModal';
import { ErrorTooltip } from '../UI/ErrorTooltip/ErrorTooltip';
import { getInputValue } from '../../store/reducers/searchInputReducer';

export const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [inputForm, setInputForm] = useState({ title: '', name: '' });

  const dispatch = useDispatch();
  const { results, isActive, errorSearch } = useSelector(state => state.videoReducer);
  const { user } = useSelector(state => state.userReducer);

  const openModal = () => {
    if (inputValue !== '') {
      setModalActive(true);
      blockScroll();
    }
  };

  const closeModal = () => {
    setModalActive(false);
    allowScroll();
  };

  const submitSearchForm = e => {
    e.preventDefault();
    dispatch(searchVideo(inputValue, apiKey));
    dispatch(getInputValue(inputValue));
  };

  const postItem = e => {
    e.preventDefault();
    const valueText = {
      title: inputForm.title,
      name: inputForm.name,
      userEmail: user.email
    };

    dispatch(addItem(valueText));
    closeModal();
  };

  return (
    <>
      <Header />
      <Main className={isActive ? 'active' : ''}>
        <SearchContainer className={isActive ? 'active' : ''}>
          <SearchTitle className={isActive ? 'active' : ''}>Поиск видео</SearchTitle>
          <SearchInner onSubmit={submitSearchForm}>
            <Input
              search
              className={isActive ? 'active' : ''}
              type="text"
              placeholder="Что хотите посмотреть?"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              required
            />
            { errorSearch && <ErrorTooltip search>Пожалуйста, повторите запрос</ErrorTooltip> }
            {
              isActive && <LikeBtn type="button" onClick={openModal}><img src={LikeIcon} alt="кнопка сохранить поиск" /></LikeBtn>
            }
            <Button main>Найти</Button>
          </SearchInner>
          {
          results && <Results inputValue={inputValue} />
          }
        </SearchContainer>
        <MainModal
          modalActive={modalActive}
          setModalActive={setModalActive}
          allowScroll={allowScroll}
          closeModal={closeModal}
          postItem={postItem}
          inputForm={inputForm}
          setInputForm={setInputForm}
          textBtn="Сохранить"
        />
      </Main>
    </>
  );
};
