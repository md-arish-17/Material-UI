import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const MuiList = () => {

    const courses = ["react","mern","java","express",".net"]

  return (
    <div>
        <List sx={{backgroundColor:"pink",width:"300px"}}>
            {courses.map((elem)=>{ 
                return <ListItem>
                    <ListItemButton>Click me</ListItemButton>
                    <ListItemText>{elem}</ListItemText>
                </ListItem>
            })}
            
        </List>
    </div>
  )
}

export default MuiList