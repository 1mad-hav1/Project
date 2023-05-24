import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table1 from './Table1'
import axios from 'axios'

const APIGet = () => {
    var [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setUsers(response.data);
            console.log(users);
        })
    .catch(err=>{console.log(err)})
    },[])
    
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>
                    {
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.username}</TableCell>
                                <TableCell>{value.email}</TableCell>
                            </TableRow>
                        )
                    })
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default APIGet