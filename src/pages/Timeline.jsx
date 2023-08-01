import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { Box, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TimelineItemCard from '../components/timeline/TimelineItemCard'
import BasicLayout from '../components/layout/BasicLayout'
import { timelineEvents } from '../data/TimelinePage'
import Portada from '../assents/portadas/Historia-min.png'

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
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '25px',
                          }}
                        />
                      </Box>
                    )}
                  </Stack>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot />
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
