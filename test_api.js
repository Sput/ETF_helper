const Alpaca = require('@alpacahq/alpaca-trade-api')

 const alpaca = new Alpaca({
     keyId: 'PKKVIOYQOAM41B4FAFV6',
     secretKey: 'ErpNLujVE72VBLRjeHu3RcLXFi3tQjogQSFTOLS6',
     paper: true,
     usePolygon: false
   })


let AAPL_price = alpaca.getLastQuote('AAPL')

console.log(AAPL_price)

//   const alpaca = new Alpaca({
//     keyId: 'AKAPFVGQCYWQN4CQ66AZ',
//     secretKey: 'i1mUv5ovJg1Vdo7fu4Br5cqiJ4l4F6DZf1LSz5I8',
//     paper: false,
//     usePolygon: false
//   })



  //const Alpaca = require('@alpacahq/alpaca-trade-api')
  //const alpaca = new Alpaca()
  
  // Get daily price data for AAPL over the last 5 trading days.
  /*
  const barset = alpaca.getBars(
      'day',
      'AAPL',
      {
          limit: 1
      }
  ).then((barset) => {
      const aapl_bars = barset['AAPL']
  
      // See how much AAPL moved in that timeframe.
      const week_open = aapl_bars[0].o
      const week_close = aapl_bars.slice(-1)[0].c
      const percent_change = (week_close - week_open) / week_open * 100
  
      //console.log(`AAPL price ${week_open} `)
  })

  let resp = alpaca.getBarsV2(
    "AAPL",
    {
        start: "2021-02-01",
        end: "2021-02-10",
        limit: 2,
        timeframe: "1Day",
        adjustment: "all",
    },
    alpaca.configuration
);
*/



//console.log(resp)

//console.log(alpaca.getAsset('AAPL'))

//console.log(alpaca.getTradesV2('AAPL'))