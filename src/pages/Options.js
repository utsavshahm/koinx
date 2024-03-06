import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { fontSize } from '@mui/system';
import { Grid } from '@mui/material';

export default function Options(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={8} >
      <Tabs value={value}  onChange={handleChange} sx={{ width: '110%','& .MuiTabs-indicator': {
          backgroundColor: 'blue', fontWeight:'500' // Change the indicator color here
        }}} >
        <Tab label="Overview" sx={{ textTransform:'none', fontWeight:'600',}}/>
        <Tab label="Fundamentals" sx={{ textTransform:'none', fontWeight:'600'}}/>
        <Tab label="News Insights" sx={{ textTransform:'none', fontWeight:'600'}}/>
        <Tab label="Sentiments" sx={{ textTransform:'none', fontWeight:'600'}}/>
        <Tab label="Team" sx={{ textTransform:'none', fontWeight:'600'}}/>
        <Tab label="Technicals" sx={{ textTransform:'none', fontWeight:'600'}}/>
        <Tab label="Tokenomics" sx={{ textTransform:'none', fontWeight:'600'}}/>
      </Tabs>
    </Grid>
  );
}
