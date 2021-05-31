import callApi from "../helpers/sendRequest";

const ApiDataProducts = {
  getListProducts(query){ 
      return callApi('/items?q='+query,{ 'method': 'GET'});
  },
  getDetailsProducts(id){ 
    return callApi('/items/'+id,{ 'method': 'GET'});
  }, 

}



export default ApiDataProducts;