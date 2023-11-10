import React, { useState } from 'react'
import { TextField, Button, Stack, Card, CardContent, Container } from '@mui/material'
import MuiTable from '../components/Navbar/MuiTable'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/users/usersSlice';



const Users = () => {
  const [userName, setUserName] = useState('');

  const dispatch = useDispatch();

  function addUserHandler() {
    dispatch(addUser(userName));
    setUserName('');
  }

  const users = useSelector(store => store.user);
  // console.log("Users", users);

  return (
    <Container style={{ marginLeft: '320px' }}>
      <Card style={{ marginLeft: '50px', marginTop: '50px' }} color='primary'>
        <CardContent>
          <form noValidate>
            <Stack spacing={2} width={700}>
              <h1>User's Details</h1>
              <TextField label={'User Id'} disabled value={users.length + 1} />
                    <TextField label={'User Name'}
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                    <Button variant='contained' color='primary' onClick={addUserHandler}>Add </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
      <MuiTable users={users} type="user"/>
    </Container>
  )
}

export default Users