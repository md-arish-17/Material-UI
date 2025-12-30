import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

const MuiAccordian = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={">"}>
                <Typography variant='h6'>
                    What is Universe?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, consectetur?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default MuiAccordian