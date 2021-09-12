import PropTypes from 'prop-types';
import { But } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <But type="button" onClick={onClick}>
      Load more
    </But>
  );
};
Button.prototype = {
  onClick: PropTypes.func.isRequired,
};
