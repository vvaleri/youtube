import useFetch from '../hooks/useFetch';
import { Main } from '../styles/search';
import { Search } from '../components';

export function IntroSearch() {
    const { mainSearch, inputValue, setInputValue, getVideo } = useFetch();

    return mainSearch ? (<Search/>) : (
      <Main>
        <input type='text'
            placeholder='Что хотите посмотреть?'
            value={ inputValue }
            onChange={ (e) => setInputValue(e.target.value) }
            ></input>
        <button onClick={ getVideo }>Найти</button>
      </Main>
    )
}