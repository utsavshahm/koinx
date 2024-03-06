import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

function TeamCard(props) {
  return (
    <div>
        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} bgcolor={'#e8f4fd'} gap={2} padding={2} mt={1} mb={1} borderRadius={2}>
            <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                <Box sx={{backgroundImage: `url(${props.avatar})`, backgroundSize:'cover', height:'120px', width:'110px'}} borderRadius={3}
                mt={1} mb={1}
                ></Box>
                <Typography variant='h8' fontWeight={700} color={'black'}>{props.name}</Typography>
                <Typography variant='p' fontSize={'13px'}>{props.designation}</Typography>
            </Stack>
            <Box>
                {props.about}
            </Box>
        </Stack>
    </div>
  );
}

export default TeamCard;
