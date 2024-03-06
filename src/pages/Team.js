import { Box, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import person1 from '../utils/person1.jpg'
import person2 from '../utils/person2.jpg'
import person3 from '../utils/person3.jpg'
import TeamCard from '../global-components/TeamCard';


const about = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quam laboriosam magnam dicta eos ipsum accusamus commodi minus, ullam ea ad unde pariatur placeat sapiente, consectetur dignissimos vitae deserunt dolore non alias molestiae quod. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sint rerum consequatur, quis modi consectetur."
function Team() {
  return (
    <>
        <Grid item xs={8} bgcolor={'white'} color={"#3e424a"} borderRadius={3} mt={2} mb={2}>
            <Stack m={'15px'}>
                <Box>
                    <h3>Team</h3>
                </Box>
                <br />
                <Box>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ratione ut expedita at fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil obcaecati cumque iste beatae.</p>
                </Box>
                <TeamCard about={about} name={"John Smith"} designation={"Designation Here"} avatar={person1}/>
                <TeamCard about={about} name={"Aleena Williams"} designation={"Designation Here"} avatar={person2}/>
                <TeamCard about={about} name={"Collins Brat"} designation={"Designation Here"} avatar={person3}/>

            </Stack>
        </Grid>
    
    
    </>
  );
}

export default Team;
