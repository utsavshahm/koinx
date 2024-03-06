import { Box, Grid, Stack, Typography } from '@mui/material';
import tokenImage from '../utils/tokenomics_image.png'
import React from 'react';

function Tokenomics() {
  return (
    <div>
      <Grid item xs={8} bgcolor={'white'} color={"#3e424a"} borderRadius={3} mt={2} mb={2}>
        <Stack m={'15px'} p={'10px'}>
            <Box>
                <h3>Tokenomics</h3>
            </Box>
            <br />

            <Stack>
                <Typography variant='h6' color={'black'} fontFamily={700}>Initial Distribution</Typography>
                <Box sx={{backgroundImage:`url(${tokenImage})`, backgroundSize:'cover'}} height={200} width={450}/>
                <br />
                <Typography variant='p' fontSize={16}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolores dolorum facere minus distinctio dolore saepe maxime esse eaque qui nesciunt consequuntur, at hic et itaque, in sunt explicabo veritatis eius neque, optio earum officia aliquam. Magnam non fuga molestias debitis, dolor fugit sint, illum necessitatibus eveniet perspiciatis recusandae sed. Laboriosam distinctio ea vel.</Typography>
                <br />
            </Stack>

        </Stack>

      </Grid>
    </div>
  );
}

export default Tokenomics;
