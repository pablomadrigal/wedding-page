import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Typography,
  styled,
} from '@mui/material'
import BasicLayout from '../components/layout/BasicLayout'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FlowerDivider from '../components/image/FlowerDivider'
import Portada from '../assents/portadas/Misa-min.png'
import { lectures } from '../data/MassPage'
import { useState } from 'react'
import ReactPlayer from 'react-player'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: 'none',
  borderBottom: '0.5px solid #dadada',
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#fffbf0',
  color: 'red',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#fffbf0',
}))

const Mass = () => {
  const [openIds, setOpenIds] = useState(lectures.map((item) => item.id))

  const handleToggle = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }
  return (
    <BasicLayout title="Mass Page" image={Portada}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <ReactPlayer
          width="100%"
          url={'https://youtube.com/live/tCSYbATsJgw'}
        />
        <Typography>
          Si no puede visualizar el video, puede dirigirse directamente al
          siguiente link de youtube
        </Typography>
        <a href="https://youtube.com/live/tCSYbATsJgw">
          https://youtube.com/live/tCSYbATsJgw
        </a>
      </Box>
      <Box>
        {lectures.map((lecture) => (
          <Accordion
            key={lecture.id}
            expanded={openIds.includes(lecture.id)}
            onChange={() => handleToggle(lecture.id)}
          >
            <AccordionSummary>
              <Box>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                >
                  {lecture.title}
                </Typography>
                {lecture.subtitle && (
                  <Typography
                    variant="h3"
                    sx={{ color: '#737373', fontSize: '0.75rem' }}
                  >
                    {lecture.subtitle}
                  </Typography>
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              {lecture.text?.map((text) => (
                <>
                  <Typography
                    key={text}
                    style={{ whiteSpace: 'pre-line', mb: 0.5 }}
                  >
                    {text}
                  </Typography>
                  {lecture.response && (
                    <Typography
                      sx={{ color: '#737373', fontSize: '0.75rem', mb: 1 }}
                    >
                      {lecture.response}
                    </Typography>
                  )}
                </>
              ))}
              {lecture.palabraDeDios && (
                <Typography sx={{ fontWeight: 'bold', my: 1 }}>
                  Palabra de Dios
                </Typography>
              )}
              {lecture.palabraDelSenor && (
                <Typography sx={{ fontWeight: 'bold', my: 1 }}>
                  Palabra del Señor
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <FlowerDivider onlyMobile position="up" />
    </BasicLayout>
  )
}

export default Mass
