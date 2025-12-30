import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiNavigation = () => {

    const [value, setValue] = useState(0)

  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h3'>LOGO</Typography>
                <Tabs sx={{marginLeft:"auto"}} textColor='white' value={value} onChange={(e,val)=>{setValue(val)}} indicatorColor='secondary'>
                    <Tab label="Home"/>
                    <Tab label="About"/>
                    <Tab label="Contact"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default MuiNavigation