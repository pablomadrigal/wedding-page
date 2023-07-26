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
import Portada from '../images/portadas/FloresAmarillas-min.jpg'

const TimelineItemCard = ({ imageURL, title, description, reverse }) => {
  return (
    <Grid container spacing={2} direction={reverse ? 'row-reverse' : 'row'}>
      {imageURL && (
        <Grid md={6} item>
          <img
            src={imageURL}
            alt={title}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
      )}
      <Grid md={imageURL ? 6 : 12} item>
        <Typography variant="h6" component="span">
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
}

TimelineItemCard.defaultProps = {
  imageURL: undefined,
  description: undefined,
  reverse: false,
}

const TimelinePage = () => {
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
                  {event.date}
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
                <TimelineItemCard {...event} reverse={idx % 2} />
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    </BasicLayout>
  )
}

export default TimelinePage
