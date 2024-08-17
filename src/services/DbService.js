import axios from "axios";

const DB_API_BASE_URL = "http://localhost:8080/api/v1/list";
// const DB_API_BASE_URL = "https://jsonplaceholder.typicode.com/todos";

const DB_SELL_API = "http://localhost:8080/sell/v1/list"; 

const DB_USERS_API = "http://localhost:8080/users/v1/list"

class DbService {
  
    getProductList(){
        return axios.get(DB_API_BASE_URL);
    }
    addStock(stock){
        return axios.post(DB_API_BASE_URL,stock);
    }
    getStockById(stockId){
        return axios.get(DB_API_BASE_URL +'/'+stockId);
    }
    updateStock(stock,stockId){
        return axios.put(DB_API_BASE_URL+'/'+stockId,stock)
    }

    getSellData(){
        return axios.get(DB_SELL_API)
    }

    getUsers(){
        return axios.get(DB_USERS_API)
    }

    addUsers(users){
        axios.post(DB_USERS_API,users);
    }
}

export default new DbService()