import axios from 'axios';
const SWAGGER_URL = import.meta.env.VITE_REACT_APP_SWAGGER_URL;

class SubscribeApi {
  async sendSubscription(email) {
    const options = {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }

    const response = await axios.post(`${SWAGGER_URL}/email`, JSON.stringify(email), options)
    if(!response) throw  new Error("Fetching data failed");
    const data = await response.data;

    return data;
  }
}
const subscribeApi = new SubscribeApi();
export default subscribeApi;