
const BASE_URL = 'http://localhost:3001/api';

  async function callApi(endpoint, options = {}, body) {
 
    options.headers = {
      'Content-Type' : 'application/json',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    };
    
    if(body){
      options.body = JSON.stringify(body)
    }
    const url = BASE_URL + endpoint;
    const response = await fetch(url,options);
    const data = await response.json(); 
    return data;
}

export default callApi;
