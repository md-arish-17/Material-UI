import { Container, Typography } from '@mui/material'
import React from 'react'

const MuiContainer = () => {
  return (
    <div>
        <Container sx={{backgroundColor:"pink",marginBottom:"20px"}} maxWidth="xs">
            <Typography>This is xs</Typography>
        </Container>
         <Container sx={{backgroundColor:"pink",marginBottom:"20px"}} maxWidth="sm">
            <Typography>This is sm</Typography>
        </Container>
         <Container sx={{backgroundColor:"pink",marginBottom:"20px"}} maxWidth="md">
            <Typography>This is md</Typography>
        </Container>
         <Container sx={{backgroundColor:"pink",marginBottom:"20px"}} maxWidth="lg">
            <Typography>This is lg</Typography>
        </Container>
         <Container sx={{backgroundColor:"pink",marginBottom:"20px"}} maxWidth="xl">
            <Typography>This is xl</Typography>
        </Container>
    </div>
  )
}

export default MuiContainer