import { Button, Drawer, ListItemButton, ListItemText, List } from '@mui/material'
import React, { useState } from 'react'

const MuiDrawer = () => {
    
    const [open, setOpen] = useState(false)
    let courses = ["react","react native","mern","mongodb","next.js","node.js","nest.js"]

  return (
    <div>
        <Button variant='contained' onClick={()=>{setOpen(true)}}>Open</Button>
        <Drawer open={open} onClose={()=>{setOpen(false)}}>
            <List>
                {courses.map((elem)=>{
                    return <ListItemButton onClick={()=>{setOpen(false)}}>
                        <ListItemText primary={elem}/>
                    </ListItemButton>
                })}
            </List>
        </Drawer>
    </div>
  )
}

export default MuiDrawer