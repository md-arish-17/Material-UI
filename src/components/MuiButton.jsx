import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import AlarmOffIcon from '@mui/icons-material/AlarmOff';
import Fab from '@mui/material/Fab';

const MuiButton = () => {
  return (
    <Stack spacing={4} direction="column">
        <Stack spacing={2} direction="row">
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant='text' color='primary'>Primary</Button>
            <Button variant='text' color='secondary'>Secondary</Button>
            <Button variant='outlined' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='outlined' color='success'>Success</Button>
            <Button variant='contained' color='info'>Info</Button>
        </Stack>
        <Stack spacing={2} direction='row' display="block">
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction="row" display={"block"}>
            <Button variant='contained' startIcon={<AddShoppingCartIcon/>} disableRipple>Shopping</Button>
            <Button variant='contained' endIcon={<AddShoppingCartIcon/>} disableElevation>Shopping</Button>
            <IconButton aria-label='shopping' color='success' size='large'>
                <AddShoppingCartIcon/>
            </IconButton>
        </Stack>
        <Stack direction={'row'}> 
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary'>
                <Button>Left</Button>
                <Button>center</Button>
                <Button>right</Button>
            </ButtonGroup>
        </Stack>
        <Stack direction={'row'}>
            <ToggleButtonGroup aria-label='text formatting'>
                <ToggleButton value="bold" aria-label='bold'>
                    <AlarmIcon/>
                </ToggleButton>
                <ToggleButton value="italic" aria-label='italic'>
                    <AlarmAddIcon/>
                </ToggleButton>
                <ToggleButton value="underlined" aria-label='underlined'>
                    <AlarmOffIcon/>
                </ToggleButton>    
            </ToggleButtonGroup>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <Fab color='primary' aria-label='add'>
                <AddShoppingCartIcon/>
            </Fab>
            <Fab color='secondary' aria-label='alarm'>
                <AlarmAddIcon/>
            </Fab>
            <Fab color='primary' variant='extended' >
                <AlarmAddIcon/>
                Alarm
            </Fab>
            <Fab color='secondary' disabled>
                <AlarmOffIcon/>
            </Fab>
            <Fab variant='extended' color='primary'>
                <AlarmAddIcon sx={{mr:1}}/>
                Alarm
            </Fab>
            <Fab variant='extended' color='primary'>
                <AlarmAddIcon sx={{mr:1}}/>
                Alarm
            </Fab>
            <Fab variant='extended' color='primary'>
                <AlarmAddIcon sx={{mr:1}}/>
                Alarm
            </Fab>
        </Stack>

    </Stack>
  )
}

export default MuiButton