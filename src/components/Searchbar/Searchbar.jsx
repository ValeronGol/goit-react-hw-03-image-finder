import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchHeader,
  Searchform,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = props => {
  function inputQuery(ev) {
    ev.preventDefault();
    console.log(ev.target[1].value);
    if (ev.target[1].value.trim() === '') {
      toast.error('Для поиска необходимо ввести слово');
      return;
    }
    props.onSubmit(ev.target[1].value.toLowerCase());
    ev.target[1].value = '';
  }
  return (
    <SearchHeader>
      <Searchform onSubmit={inputQuery}>
        <SearchButton type="submit">
          <SearchLabel>Search</SearchLabel>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Searchform>
    </SearchHeader>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
