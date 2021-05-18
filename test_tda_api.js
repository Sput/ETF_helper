//BTMZPVP11OHBO0FJ
const axios = require('axios');
URL = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&'

axios.get(URL)
  .then(response => {
    const ticker_data = response.data;
    const price = ticker_data['Global Quote']["05. price"]
    console.log(price);
  })


/*
  TD_URL = 'https://api.tdameritrade.com/v1/marketdata/MSFT/quotes?apikey=<enter TD API KEY>'

axios.get(TD_URL)
  .then(response => {
    const td_data = response.data;
    const price = td_data['MSFT']["lastPrice"]
    console.log(price);
  })
*/
