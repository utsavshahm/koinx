import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import tradePic1 from '../utils/tradepic1.jpg'
import tradePic2 from '../utils/tradepic2.jpg'
import Card from '../global-components/Card';

function About() {
  return (
    <>
        <Grid item xs={8} bgcolor={'white'} color={"#3e424a"} borderRadius={3} mt={2} mb={2}>
            <Stack m={'15px'} gap={3}>
                <Box >
                    <h2 style={{color:'black'}}>About Bitcoin</h2>
                </Box>
                <Box >
                    <h4 style={{color:'black'}}>What is Bitcoin?</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque impedit molestias dolore, facilis obcaecati, aut placeat itaque nostrum voluptatibus aspernatur consequatur! Nam, eveniet at? Adipisci ut necessitatibus nam recusandae repellat molestiae possimus quasi at.</p>
                </Box>
                <hr />
                <Box >
                    <h4 style={{color:'black'}}>Lorem ipsum dolor sit.</h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum fugiat error iste, qui eos deleniti, ad minima reprehenderit quisquam tempore dolore ex id ut ullam! Dignissimos mollitia ullam nesciunt. Inventore, similique! Dolore, quos.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum fugiat error iste, qui eos deleniti, ad minima reprehenderit quisquam tempore dolore ex id ut ullam! Dignissimos mollitia ullam nesciunt. Inventore, similique! Dolore, quos.</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus harum fugiat error iste, qui eos deleniti, ad minima reprehenderit quisquam tempore dolore ex id ut ullam! Dignissimos mollitia ullam nesciunt. Inventore, similique! Dolore, quos.</p>
                </Box>
                <hr />
                <Box display={'flex'} flexDirection={'column'} gap={2}>
                    <h2>Already Holding Bitcoin?</h2>

                    <Stack direction={'row'} gap={5}>

                        <Card bgcolor={'background: hsla(159, 82%, 55%, 1); background: linear-gradient(90deg, hsla(159, 82%, 55%, 1) 0%, hsla(206, 98%, 48%, 1) 100%);'} image={tradePic1} cardText={'Calculate your Profits'} btnText={'Check Now'}/>

                        <Card bgcolor={'background: hsla(0, 100%, 60%, 1); background: linear-gradient(90deg, hsla(0, 100%, 60%, 1) 0%, hsla(33, 100%, 53%, 1) 100%);'}
                        image={tradePic2} cardText={'Calculate your tax liability'} btnText={'Check Now'}
                        />
                    </Stack>
                </Box>
                <hr />
                <Box >
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque impedit molestias dolore, facilis obcaecati, aut placeat itaque nostrum voluptatibus aspernatur consequatur! Nam, eveniet at? Adipisci ut necessitatibus nam recusandae repellat molestiae possimus quasi at.</p>
                </Box>

            </Stack>
        </Grid>
    
    </>
  );
}

export default About;
