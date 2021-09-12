import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ image, largeImageURL, tags }) {
  return (
    <Item>
      <Img src={image} alt={tags} data-largeImg={largeImageURL} />
    </Item>
  );
}

ImageGalleryItem.prototype = {
  image: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
