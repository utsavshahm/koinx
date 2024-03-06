import { Grid } from '@mui/material';
import React from 'react';
import Options from './Options';

function Main() {
  return (
    <>

        <Grid container margin={'20px auto'} width={'75%'} border={'2px solid blue'}>
            <Options/>

        </Grid>
    </>
  );
}

export default Main;
