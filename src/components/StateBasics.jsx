import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname] = useState("Mm");
    var [val,setVal]=useState();
    const changeName = () =>{
        console.log("Clicked");
        setPname(val);
    }
    const inptHndler = (e)=>
    {
      setVal(e.target.value);
      console.log(val);
    }
  return (
    <div><h1>Hello {pname}</h1>
    <TextField variant='outlined' label="Name" onChange={inptHndler}></TextField>
    <br/>
    <Button variant='contained' onClick={changeName}>Change</Button>
    </div>

  )
}

export default StateBasics