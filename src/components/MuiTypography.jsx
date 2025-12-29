import React from 'react'
import Typography from '@mui/material/Typography'
import { brown, green } from '@mui/material/colors'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' component={"h4"} sx={{color:"brown"}}>Hello</Typography>
        <Typography variant="h1">Its Arish</Typography>
        <Typography variant='h2'>its usman</Typography>
        <Typography variant='h3'>its zaheen</Typography>
        <Typography variant='h4' component="h1" gutterBottom>its sana</Typography>
        <Typography variant='h5'>its anas</Typography>
        <Typography variant='h6'>its lalala</Typography>
        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>
        <Typography variant='body1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, velit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum quos nesciunt eum modi ab reprehenderit accusantium, facere blanditiis officiis?</Typography>
    </div>
  )
}

export default MuiTypography