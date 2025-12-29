import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const MuiNavigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h3'>LOGO</Typography>
                <Button variant='contained' color='success' sx={{marginLeft:"auto"}}>Sign In</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default MuiNavigation