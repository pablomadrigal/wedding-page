import PropTypes from 'prop-types';
import useDetectMobile from '../../hooks/useDetectMobile';

function FlowerDivider({ onlyMobile }) {
  const { isMobile } = useDetectMobile();


  if (onlyMobile && !isMobile){ return null }
  else
    return (
      <div style={{height: 'auto', width: "100%"}}>
          <img src={`/Assents/Intermedio.png`} style={{width: "100%", height: "auto"}}  />
        </div>
    );
}

FlowerDivider.propTypes = {
  onlyMobile: PropTypes.bool
};

FlowerDivider.defaultProps = {
  onlyMobile: false,
};

export default FlowerDivider;
