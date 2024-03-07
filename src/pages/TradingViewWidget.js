// // TradingViewWidget.jsx
import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, memo, useState } from 'react';
import { coinsData } from '../data';

// function TradingViewWidget() {

//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "symbol": "BITSTAMP:BTCUSD",
//           "interval": "D",
//           "height" : 980
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "3",
//           "locale": "en",
//           "enable_publishing": false,
//           "allow_symbol_change": true,
//           "calendar": false,
//           "hide_volume": true,
//           "support_host": "https://www.tradingview.com"
//         }`;
//         if (container.current) {
//             container.current.appendChild(script);
//         }

//       return () => {
//         if (container.current && container.current.contains(script)) {
//             container.current.removeChild(script);
//         }
//       };
//     },
//     []
//   );

//   return (
//     <Grid item xs={8} className="tradingview-widget-container" ref={container} borderRadius={3} mt={2} mb={2} bgcolor={'white'} color={"#3e424a"} height={1000}>
//         <Stack direction={'row'}>
//             <img src={requiredData.imageSrc} alt="coinImage" height={40} width={40}/>
//             <Typography variant='h4' ml={2}>Bitcoin</Typography>
            
//         </Stack>
//         <Box></Box>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </Grid>
//   );
// }

// export default memo(TradingViewWidget);

// TradingViewWidget.jsx
// import { Box, Grid, Stack, Typography } from '@mui/material';
// // TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
    const [requiredData, setData] = useState({
        imageSrc: '',
        marketCapRank: 1,
        currentUSDPrice: "$ 16815",
        currentINRPrice: "Rs 3942343",
        symbol:'BTC',
        priceChange24H:'0%'
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
                priceChange24H: marketData.price_change_percentage_24h,
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
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "980",
          "height": "610",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "allow_symbol_change": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    //   container.current.appendChild(script);
    container.current.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      container.current.removeChild(script);
    };
    },
    []
  );

  return (
    <Grid item xs={8} className="tradingview-widget-container" ref={container} mt={2} mb={5} borderRadius={3} bgcolor={'white'}>
        <Stack direction={'row'}>
             <img src={requiredData.imageSrc} alt="coinImage" height={40} width={40}/>
             <Typography variant='h4' ml={2} mr={2}>Bitcoin</Typography>
            
        </Stack>
        <Box></Box>
      <div className="tradingview-widget-container__widget"></div>
    </Grid>
  );
}

export default memo(TradingViewWidget);
