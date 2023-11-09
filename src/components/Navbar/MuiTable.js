import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editUsers } from '../../features/users/usersSlice';
export default function MuiTable({ users }) {

    const [editUser, setEditUser] = React.useState({ userName: '' });

    const [updateName, setUpdateName] = React.useState('');
   const dispatch= useDispatch();
    function editHandler(id) {
        setEditUser((prevState) => {
            return { ...prevState, userName: users[id - 1].userName, id:id }
        });
        setUpdateName(users[id - 1].userName);
    }

    function handleSave(id){
         dispatch(editUsers(id,updateName));
         console.log("UsersMUI",users);
         setEditUser("");
    }


    return (
        <TableContainer component={Paper} style={{ marginLeft: '50px', marginTop: '20px', width: "700px" }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={{ backgroundColor: '#101F33', color: 'rgba(255, 255, 255, 0.7)' }}>
                    <TableRow>
                        <TableCell style={{ color: 'rgba(255, 255, 255, 0.7)' }} >
                            Uid
                        </TableCell>
                        <TableCell align="center" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            User Name
                        </TableCell>
                        <TableCell align="center" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.length > 0 && users.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">
                                U{row.id}
                            </TableCell>
                            <TableCell align="center" component="th" scope="row">

                                
                                {
                                   editUser.hasOwnProperty("id") && editUser.id===row.id ?
                                    <>
                                        <TextField type='text' value={updateName}
                                            onChange={(e) => setUpdateName(e.target.value)}
                                            size="small" margin='none'
                                        />
                                        <Button variant='contained' 
                                        onClick={(e)=>{handleSave(row.id)}}
                                        >Save</Button>
                                    </> :
                                    row.userName
                                }

                            </TableCell>
                            <TableCell align="center">
                                <Button variant='contained'
                                    style={{ marginRight: '2px' }}
                                    onClick={(e) => editHandler(row.id)}
                                >Edit</Button>
                                <Button variant='contained' >Delete</Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}