import React from 'react';
import {Box, Button, Stack} from '@mui/material'
import logo from '../utils/koinX_logo.png'

function Navbar() {
  return (
    <>
        <Stack direction={'row'} justifyContent={'space-around'} alignItems={'center'} gap={25} paddingTop={1} bgcolor={'white'}>
            <Box width={'150px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <img src={logo} alt="logo" height={'50px'} width={'150px'} />
            </Box>

            <Stack direction={'row'} justifyContent={'space-around'}  gap={3}>
                <Button variant='text' sx={{color:'#12192c', fontWeight:'700', textTransform:'none'}}>Crypto Taxes</Button>
                <Button variant='text'sx={{color:'#12192c', fontWeight:'700', textTransform:'none'}}>Free Tools</Button>
                <Button variant='text'sx={{color:'#12192c', fontWeight:'700', textTransform:'none'}}>Resource Center</Button>
                <Button variant='contained' sx={{backgroundColor:'blue', textTransform:'none', fontWeight:'500', fontSize:"15px", borderRadius:'10px'}}>Get Started</Button>
            </Stack>
        </Stack>
    </>
  );
}

export default Navbar;
