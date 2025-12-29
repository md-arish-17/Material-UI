import { FormControl, Stack, TextField, Button, FormGroup, FormControlLabel,Checkbox, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from '@mui/material'
import React, { useState } from 'react'

const MuiForm = () => {

    const [input, setInput] = useState({
        name:"",
        email:"",
        password:"",
        terms:false,
        courses:"",
        gender:""
    })

    const changeHandler = (e)=>{
        setInput(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(input)
    }

  return (
    <Stack direction={"row"} spacing={4}>
        <form onSubmit={submitHandler} style={{display:'flex',flexDirection:"column"}}>
            <TextField label="Name" name='name' variant='outlined' value={input.name} onChange={changeHandler}/> <br />
            <TextField label="Email" name='email' variant='outlined' value={input.email} onChange={changeHandler}/> <br />
            <TextField label="Password" name='password' type='password' variant='outlined' value={input.password} onChange={changeHandler}/> <br />
            <FormGroup>
                <FormControlLabel label="I Agree T&C" control={<Checkbox onChange={()=>{
                    setInput((prevState=>({
                        ...prevState,
                        terms:!input.terms
                    })))
                }}/>}/>
            </FormGroup> <br />
            <FormControl>
                <InputLabel >Courses</InputLabel>
                <Select label="Courses" value={input.courses} onChange={changeHandler} name='courses'>
                    <MenuItem value={"node"}>Node</MenuItem>
                    <MenuItem value={"express"}>Express</MenuItem>
                    <MenuItem value={"react"}>React</MenuItem>
                    <MenuItem value={"mongodb"}>MongoDB</MenuItem>
                </Select>
            </FormControl><br />
            <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup name='gender' onChange={changeHandler}>
                    <FormControlLabel value={"male"} label="Male" control={<Radio/>}/>
                    <FormControlLabel value={"female"} label="Female" control={<Radio/>}/>
                    <FormControlLabel value={"other"} label="Other" control={<Radio/>}/>
                </RadioGroup>
            </FormControl>
            <Button variant='contained' type='submit'>Submit</Button>
        </form>
    </Stack>
  )
}

export default MuiForm