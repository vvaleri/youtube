import { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from '..';
import { Results } from '../Results/Results';
import { Button } from '../UI/Button/Button';
import { Input } from '../UI/Input/Input';
import { ItemModal } from '../ItemModal/ItemModal';
import { Main, SearchContainer, SearchTitle, SearchInner, LikeBtn } from './searchStyles';
import useScrollBlock from '../../hooks/useScrollBlock';
import apiKey from '../../config/key';

export const Search = () => {
  const [video, setVideo] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [classActive, setClassActive] = useState('');
  const [results, setResult] = useState(false);
  const [resultClass, setResultClass] = useState('');

  const [modalActive, setModalActive] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&key=${apiKey}&maxResults=20`);
    const result = await response.json();
    setVideo(result.items);
    setClassActive('active');
    setResult(true);
    setResultClass('active');
    // localStorage.setItem('classResult', 'true');
  };

  useEffect(() => {
    if (localStorage.getItem('classResult')) {
      setClassActive('active');
      setResult(true);
    }
  }, []);

  const openModal = () => {
    setModalActive(true);
    blockScroll();
  };

  const postItem = valueText => {
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
            <LikeBtn className={classActive} onClick={openModal}><img src="img/like.svg" alt="кнопка сохранить поиск" /></LikeBtn>
            <Button main onClick={getVideo}>Найти</Button>
          </SearchInner>
          {
          results && <Results video={video} inputValue={inputValue} resultClass={resultClass} />
          }
        </SearchContainer>
        <ItemModal
          modalActive={modalActive}
          setModalActive={setModalActive}
          allowScroll={allowScroll}
          postItem={postItem}
        />
      </Main>
    </>
  );
};
