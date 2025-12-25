import React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'


const MuiTextfeild = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction={'row'}>
            <TextField label="Name" variant='outlined'/>
            <TextField label="Name" variant='filled'/>
            <TextField label="Name" variant='standard'/>
            <TextField label="Small Name" size='small' variant='outlined' color='secondary'/>
            <TextField label="Form Input" required size='small'/>
        </Stack>
        <Stack spacing={2} direction={'row'}>
            <TextField 
            label="Form Input" 
            size='small' 
            required 
            />
            <TextField
            type='password' 
            required
            label="Password" 
            size='small'
            helperText="Do not share your password with anyone"
            />
        </Stack>
    </Stack>
  )
}

export default MuiTextfeild