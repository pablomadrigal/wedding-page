import PropTypes from 'prop-types'

import { useEffect, useState } from 'react'
import { Grid, SvgIcon, Typography, Button } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DirectionsIcon from '@mui/icons-material/Directions'
import background from '../../assents/backgrounds/background.png'

const ScheduleItem = ({
  title,
  icon,
  location,
  description,
  time,
  lat,
  long,
}) => {
  const [isAndroid, setIsAndroid] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/android/i.test(userAgent)) setIsAndroid(true)
  }, [])

  const onClickGoTo = (lat, long) => {
    window.open(
      isAndroid
        ? `geo:0,0?q=${lat},${long}`
        : `http://maps.apple.com/?q=${lat},${long}`,
      '_blank'
    )
  }
  return (
    <Grid item container>
      <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: 'end' }}>
        {<SvgIcon sx={{ fontSize: 150 }}>{icon}</SvgIcon>}
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} sx={{ textAlign: 'center' }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">
          <LocationOnIcon sx={{ verticalAlign: 'middle' }} />
          {location}
        </Typography>
        {description && <Typography variant="h6">{description}</Typography>}
        <Typography variant="h6">
          <AccessTimeIcon sx={{ verticalAlign: 'middle' }} /> {time}
        </Typography>
        <Button
          onClick={() => onClickGoTo(lat, long)}
          variant="contained"
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            color: 'white',
          }}
        >
          <DirectionsIcon /> Ir al lugar
        </Button>
      </Grid>
    </Grid>
  )
}

ScheduleItem.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  location: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  lat: PropTypes.number,
  long: PropTypes.number,
}

ScheduleItem.defaultProps = {
  title: '',
}

export default ScheduleItem
