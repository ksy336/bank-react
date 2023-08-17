const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

class NewsApi {
  async getNewsFromApi() {
    const options  = {
      headers: {
        'X-Api-Key': '7b5c94d160d64e8d8e352ed0706d333b'
      }
    }
    const response = await fetch(API_URL, options);
    const data = await response.json();
    return data;
  }
}
const newsApi = new NewsApi();
export default newsApi;