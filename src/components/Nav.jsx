import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography color={"red"}> Goto</Typography>
                    <Button><Link to={'/'}>StateBasics</Link></Button>
                     <Button variant='text'><Link to={'/Frst'}>Frst</Link></Button>
                     <Button><Link to={'/Table1'}>Table</Link></Button>
                     <Button><Link to={'/axios'}>APIGet</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav