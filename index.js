const fetch = require('node-fetch');
const fetchCoinMarket = async (apiUrl) => {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(res => {
                resolve(res.json())
            })
            .catch(err => {
                reject(err)
            })
    })
}
var coinMarketApiUrl = 'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=JPY';

(async() => {
    var fetchedData = await fetchLegalCurrency(coinMarketApiUrl);

    console.log(fetchedData);
})();
