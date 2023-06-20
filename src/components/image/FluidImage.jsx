import PropTypes from 'prop-types';

const imageStyle = {
  width: '100%',
  height: 'auto',
};

function FluidImage({ imgURL, altText }) {
  return (
    <img src={imgURL} style={imageStyle} alt={altText} />
  );
}

FluidImage.propTypes = {
  imgURL: PropTypes.string.isRequired,
  altText: PropTypes.string,
};

FluidImage.defaultProps = {
  altText: '',
};

export default FluidImage;
