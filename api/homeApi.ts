class HomeApi {
  async getCurrencies () {
    const currencies = ["USD", "EUR", "SGD", "MYR", "AUD", "JPY"];
    const requestUrls = currencies.map((from) => {
      return `https://currency-exchange.p.rapidapi.com/exchange?from=${from}&to=RUB&q=1.0`
    })
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '1ac1266c4emsh7c93fe2cf610d0ap14e915jsnbbfcf02933df',
        'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
      }
    }

    return Promise.all(requestUrls.map(async url => {
      const resp = await fetch(url, options);
      return resp.text();
    }));
  }
}
const homeApi = new HomeApi();
export default homeApi;
