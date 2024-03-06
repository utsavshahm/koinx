import { Box, Button, Stack } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Card(props) {
  return (
    <div>
        <Stack direction={'row'} height={150} width={350} alignItems={'center'} gap={1} justifyContent={'space-evenly'} sx={{background: `${props.bgcolor}`}} borderRadius={3}>

            <Box ml={1} mr={1} borderRadius={2} sx={{backgroundImage:`url(${props.image})`, backgroundSize:'cover', height:'100px', width:'130px'}}>
            </Box>
            <Box color={'white'}>
                <h3>{props.cardText}</h3>
                <Button  endIcon={<ArrowForwardIcon fontSize='medium'/>}  variant="outlined" sx={{textTransform:'none', color:'black', backgroundColor:'white', marginTop:'15px'}}>{props.btnText}</Button>
            </Box>
        </Stack>
    </div>
  );
}

export default Card;
