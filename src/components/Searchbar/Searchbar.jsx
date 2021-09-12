import PropTypes from 'prop-types';
import {
  SearchHeader,
  Searchform,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = onSubmit => {
  return (
    <SearchHeader>
      <Searchform onSubmit={onSubmit}>
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
