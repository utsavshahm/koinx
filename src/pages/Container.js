import React from 'react';
import { Grid } from '@mui/material';
import Options from './Options';
import Example from '../global-components/Example';
import About from './About';
import Team from './Team'
import Tokenomics from './Tokenomics';
import Performance from './Performance';
import TradingViewWidget from './TradingViewWidget';


function Container() {
  return (
    <>

        <Grid container margin={'20px auto'} width={'85%'}>
            <TradingViewWidget/>
            <Options/>
            <Performance/>
            <About/>
            <Tokenomics/>
            <Team/>
        </Grid>
            {/* <Example/> */}
    </>
  );
}

export default Container;


