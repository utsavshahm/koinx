import React from 'react';
import { Grid } from '@mui/material';
import Options from './Options';
import Example from '../global-components/Example';
import About from './About';
import Team from './Team'
import Tokenomics from './Tokenomics';


function Container() {
  return (
    <>

        <Grid container margin={'20px auto'} width={'85%'} border={'2px solid red'}>
            <Options/>
            <About/>
            <Tokenomics/>
            <Team/>
        </Grid>
            {/* <Example/> */}
    </>
  );
}

export default Container;


