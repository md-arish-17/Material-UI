import { Box, Button, Link, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiModal = () => {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <Button variant='contained' onClick={()=>{setOpen(true)}}>Open Modal</Button>
        <Modal open={open} onClose={()=>{setOpen(false)}}>
            <Box position={'absolute'} left={"45%"} top={"45%"}>
                <Typography>This is modal</Typography>
                <Button variant='contained' onClick={()=>{setOpen(false)}}>cancel</Button>
            </Box>
        </Modal>
        <Link href="https://www.google.com" color='secondary' marginLeft={5} underline='hover'>Privacy and Policy</Link>
    </div>
  )
}

export default MuiModal