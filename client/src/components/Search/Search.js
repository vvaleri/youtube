import { useEffect, useState } from 'react';
import { Results, FavouriteModal, Header } from '../../components';
import { Main, SearchContainer, SearchTitle, SearchInner, SearchInput, LikeBtn } from './searchStyles';
import { Button } from '../UI/Button/Button';
import apiKey from '../../config/key';

export const Search = () => {

  const [ video, setVideo ] = useState([]);
  const [ inputValue, setInputValue ] = useState('');
  const [ classActive, setClassActive ] = useState('');
  const [ results, setResult ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ resultClass, setResultClass ] = useState('');

  const getVideo = async () => {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${ inputValue }&key=${ apiKey }`);
    const result = await response.json(); 
    setVideo(result.items)
    setClassActive('active');
    setResult(true);
    setResultClass('active');
    // localStorage.setItem('classResult', 'true');
  }

  useEffect(() => {
    if (localStorage.getItem('classResult')) {
      setClassActive('active');
      setResult(true);
    } 
  }, [])

  return (
    <>
      <Header/>
      <Main className={ classActive }>
        <SearchContainer className={ classActive }>
          <SearchTitle className={ classActive }>Поиск видео</SearchTitle>
          <SearchInner>
            <SearchInput 
              className={ classActive }
              type='text'
              placeholder='Что хотите посмотреть?'
              value={ inputValue }
              onChange={ (e) => setInputValue(e.target.value) }
            />
            <LikeBtn onClick={ () => setModal(true) } className={ classActive }><img src="img/like.svg" alt="кнопка сохранить поиск"/></LikeBtn>
            {/* <SearchBtn className={ classActive } onClick={ getVideo }>Найти</SearchBtn> */}
            <Button main onClick={ getVideo }>Найти</Button>
          </SearchInner>
          {
          results && <Results video={ video } inputValue={ inputValue } resultClass={ resultClass }/>
          }
        </SearchContainer>
        {
        modal && <FavouriteModal setModal={ setModal }/>
        }
      </Main> 

    </>
  )
}