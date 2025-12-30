import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiCard = () => {

    const [open, setOpen] = useState(false)

  return (
    <div>
        <Card  sx={{ maxWidth: 270 }}>
            <CardMedia
              component={"img"}
              image='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'
              height={150}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    Web Design
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptate.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size='small'>Share</Button>
                <Button 
                  variant='contained' 
                  size='small'
                  onClick={()=>{setOpen(true)}}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
        <Dialog open={open} onClose={()=>{setOpen(false)}}>
            <DialogTitle>Are you Sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete it?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setOpen(false)}}>cancel</Button>
                <Button>delete</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default MuiCard