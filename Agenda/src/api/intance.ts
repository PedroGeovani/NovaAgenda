import axios, { Axios, type AxiosInstance, type AxiosResponse } from "axios";

export class InstanceApi<T>{
      url: string;
      database: string;
      api?: AxiosInstance;      
      list?: Array<T>;
    constructor(
      url: string,
      database: string,
    ){
      this.url = url;
      this.database = database; 
    }

instanceAxios(){
  this.api = axios.create({
    baseURL: this.url
  }) 
} 
  
getUsers<T>(): Array<T>|any{ 
      this.api?.get(this.database)
        .then(response => (this.list = response.data))
        .catch(err => console.log(err))   
    return this.list   
  }
  
}


