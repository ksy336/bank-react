import axios from 'axios';
const SWAGGER_URL = import.meta.env.VITE_REACT_APP_SWAGGER_URL;

class PrescoringApi {
  async sendFormData(prescoringData) {
    console.log(prescoringData)
      const options = {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
      const response = await axios.post(`${SWAGGER_URL}/application`, JSON.stringify(prescoringData), options);
      if(!response) throw  new Error("Fetching data failed");
      const data = await response.data;

      return data;
  }
}
const prescoringApi = new PrescoringApi();
export default prescoringApi;