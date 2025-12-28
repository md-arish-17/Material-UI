import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { InputAdornment } from '@mui/material'


const MuiTextfeild = () => {
  const [val, setVal] = useState("")
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
            <TextField label="Read only" InputProps={{readOnly:true}} helperText="this field is readonly text"/>
            <TextField label="Converter" InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}/>
            <TextField label="Weight" InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}/>
            <TextField label="form input" error={!val} value={val} onChange={(e)=>{setVal(e.target.value)}} required helperText={!val? "This field is required":"Do not share your password"}/>
        </Stack>
    </Stack>
  )
}

export default MuiTextfeild