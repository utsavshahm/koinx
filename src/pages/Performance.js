import React, { useState } from 'react';
import { coinsData } from '../data';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import perf from "../utils/performance.png"
import InfoIcon from '@mui/icons-material/Info';


function Performance() {

  const [requiredData, setData] = useState({
    imageSrc: '',
    marketCapRank: 1,
    currentUSDPrice: "$ 16815",
    currentINRPrice: "Rs 3942343",
    allTimeHighUSD: "$ 69044",
    allTimeLowUSD: "$ 67.41",
    marketCap: "323507290047",
    high24hr: "$ 16382",
    low24hr: "$ 16374",
    priceChange24H: "2.51%",
    volume: 0
  });
const bitCoinData = async () => {
    try {
        const bitcoinResponseData = await coinsData("bitcoin");
        const marketData = bitcoinResponseData.market_data;

        const fetchData = {
            imageSrc: bitcoinResponseData.image.thumb,
            marketCapRank: bitcoinResponseData.market_cap_rank,
            currentUSDPrice: marketData.current_price.usd,
            currentINRPrice: marketData.current_price.inr,
            allTimeHighUSD: marketData.ath.usd,
            allTimeLowUSD: marketData.atl.usd,
            marketCap: marketData.market_cap.usd,
            high24hr: marketData.high_24h.usd,
            low24hr: marketData.low_24h.usd,
            priceChange24H: marketData.price_change_percentage_24h,
            volume: marketData.total_volume.usd
        };

        // requiredData = fetchData;
        console.log(fetchData);
        return fetchData;
    } catch (error) {
        console.log(error);
    }
};

bitCoinData();
bitCoinData().then(fetchData => {
  setData(fetchData);
}).catch(error => {
  console.error(error);
});
// console.log(requiredData)
    
  return (
    <div>
      <Grid item xs={8} bgcolor={'white'} color={"#3e424a"} borderRadius={3} mt={2} mb={2} width={1290}>

            <Stack m={'15px'} p={'20px 0'}>
                <Box mb={2}>
                    <h2 style={{color:'black'}}>Performance</h2>
                </Box>
                <Box>
                  <img src={perf} alt="performance image" srcset="" height={170} width={'100%'}/>
                </Box>

                <Box display={'flex'} alignItems={'center'} mt={1}>
                  <h3>Fundamentals <InfoIcon fontSize='small'/> </h3>
                </Box>

                <Stack direction={'row'} mt={2} justifyContent={'space-between'} fontSize={14}>
                  <Stack direction={'column'}  gap={2} width={'40%'}>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Bitcoin Price</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.currentUSDPrice}</Typography>
                    </Stack>

                    <Divider/>


                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>24h Low / 24h High</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.low24hr + ' / ' + '$ ' + requiredData.high24hr}</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>7d Low / 7d High</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.low24hr + ' / ' + '$ ' + requiredData.high24hr}</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Trading Volume</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.volume}</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Market Cap Rank</Typography>
                      <Typography variant='p' fontWeight={700}>{'#' + requiredData.marketCapRank}</Typography>
                    </Stack>

                  </Stack>

                  <Stack direction={'column'}  gap={2} width={'50%'}>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Market Cap</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.marketCap}</Typography>
                    </Stack>

                    <Divider/>


                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Market Cap Dominance</Typography>
                      <Typography variant='p' fontWeight={700}>38.343%</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>Volume/Market Cap</Typography>
                      <Typography variant='p'fontWeight={700}>{requiredData.volume/requiredData.marketCap}</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>All Time High</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.allTimeHighUSD}</Typography>
                    </Stack>

                    <Divider/>

                    <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography variant='p' color={'#758295'}>All Time Low</Typography>
                      <Typography variant='p' fontWeight={700}>{'$ ' + requiredData.allTimeLowUSD}</Typography>
                    </Stack>

                  </Stack>

                </Stack>
            </Stack>

      </Grid>

    </div>
  );
}

export default Performance;
