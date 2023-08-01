import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const TimelineItemCard = ({
  imageURL,
  title,
  description,
  reverse,
  cellphone,
}) => {
  return (
    <Grid
      container
      spacing={2}
      direction={reverse ? 'row-reverse' : 'row'}
      sx={{ borderRadius: '70px', backgroundColor: '#fffbf0' }}
    >
      {imageURL && !cellphone && (
        <Grid xs={0} sm={0} md={6} item>
          <img
            src={imageURL}
            alt={title}
            style={{ width: '100%', height: 'auto', borderRadius: '25px' }}
          />
        </Grid>
      )}
      <Grid xs={12} sm={12} md={imageURL ? 6 : 12} item>
        <Typography
          variant="h6"
          component="span"
          sx={{ fontSize: cellphone ? '1rem' : '1.5rem' }}
        >
          {title}
        </Typography>
        {description && <Typography variant="body2">{description}</Typography>}
      </Grid>
    </Grid>
  )
}

TimelineItemCard.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  reverse: PropTypes.bool,
  cellphone: PropTypes.bool,
}

TimelineItemCard.defaultProps = {
  imageURL: undefined,
  description: undefined,
  reverse: false,
  cellphone: false,
}

export default TimelineItemCard
