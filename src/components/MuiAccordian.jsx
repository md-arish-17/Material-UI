import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from '@mui/material'
import React from 'react'

const MuiAccordian = () => {
    let courses = ["react","react native","mern","mongodb","next.js","node.js","nest.js"]
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
        <Autocomplete
          sx={{width:"250px",marginTop:"20px"}}
          options={courses}
          renderInput={(params)=>(<TextField {...params} label="Select a Course"/>)}
        />
    </div>
  )
}

export default MuiAccordian