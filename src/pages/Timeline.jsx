import PropTypes from 'prop-types'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import BasicLayout from '../components/layout/BasicLayout'
import { timelineEvents } from '../data/TimelinePage'
import Portada from '../images/portadas/Historia-min.png'
import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const TimelineItemCard = ({
  imageURL,
  title,
  description,
  reverse,
  cellphone,
}) => {
  return (
    <Grid container spacing={2} direction={reverse ? 'row-reverse' : 'row'}>
      {imageURL && !cellphone && (
        <Grid xs={0} sm={0} md={6} item>
          <img
            src={imageURL}
            alt={title}
            style={{ width: '100%', height: 'auto' }}
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

const TimelinePage = () => {
  const theme = useTheme()
  const cellphone = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <BasicLayout title="Timeline" image={Portada}>
      <Timeline position="alternate">
        {timelineEvents.map((event, idx) => {
          return (
            <TimelineItem key={event.id}>
              {event.date && (
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align={idx % 2 ? 'right' : 'left'}
                >
                  <Stack>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{ fontSize: cellphone ? '1rem' : '1.75rem' }}
                    >
                      {event.date}
                    </Typography>
                    {cellphone && event.imageURL && (
                      <Box>
                        <img
                          src={event.imageURL}
                          alt={event.title}
                          style={{ width: '100%', height: 'auto' }}
                        />
                      </Box>
                    )}
                  </Stack>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineConnector />
                {event.icon ? (
                  <TimelineDot>
                    <FastfoodIcon />
                  </TimelineDot>
                ) : (
                  <TimelineDot />
                )}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <TimelineItemCard
                  cellphone={cellphone}
                  {...event}
                  reverse={idx % 2 === 1}
                />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </BasicLayout>
  )
}

export default TimelinePage
