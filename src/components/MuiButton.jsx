import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

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
    </Stack>
  )
}

export default MuiButton