import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImgGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ data, onOpenModal }) => {
  return (
    <div display="flex" flexDirection="column" alignItems="center">
      <ImgGalleryList>
        {data.map(item => {
          return (
            <ImageGalleryItem
              onOpenModal={onOpenModal}
              key={item.id}
              img={item.webformatURL}
              name={item.tags}
              largeImg={item.largeImageURL}
            />
          );
        })}
      </ImgGalleryList>
    </div>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};