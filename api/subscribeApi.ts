const SWAGGER_URL = import.meta.env.VITE_REACT_APP_SWAGGER_URL;

class SubscribeApi {
  async sendSubscription(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*",
      },
      body: JSON.stringify(data),
    }
    const response  = await fetch(`${SWAGGER_URL}/email`, options);

    return await response.json();
  }
}
const subscribeApi = new SubscribeApi();
export default subscribeApi;