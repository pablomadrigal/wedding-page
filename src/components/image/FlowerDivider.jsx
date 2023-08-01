import PropTypes from 'prop-types'
import useDetectMobile from '../../hooks/useDetectMobile'

import Arriba from '../../assents/backgrounds/Arriba.png'
import Intermedio from '../../assents/backgrounds/Intermedio.png'
import Abajo from '../../assents/backgrounds/Abajo.png'

const filteredItems = (filter) => {
  return {
    up: Arriba,
    center: Intermedio,
    down: Abajo,
  }[filter]
}

function FlowerDivider({ onlyMobile, position }) {
  const { isMobile } = useDetectMobile()

  if (onlyMobile && !isMobile) {
    return null
  } else
    return (
      <div
        style={{
          height: 'auto',
          width: '100%',
          marginTop: position === 'up' ? 'none' : '15px',
          marginBottom: position === 'down' ? 'none' : '15px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={filteredItems(position)}
          style={{ width: '100%', height: 'auto', maxWidth: '700px' }}
        />
      </div>
    )
}

FlowerDivider.propTypes = {
  onlyMobile: PropTypes.bool,
  position: PropTypes.oneOf(['up', 'down', 'center']),
}

FlowerDivider.defaultProps = {
  onlyMobile: false,
  position: 'center',
}

export default FlowerDivider
