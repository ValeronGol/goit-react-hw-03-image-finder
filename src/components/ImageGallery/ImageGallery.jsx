import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <Gallery onClick={onClick}>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => (
        <li key={id}>
          <ImageGalleryItem
            image={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
          />
        </li>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      largeImageURL: PropTypes.string,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
