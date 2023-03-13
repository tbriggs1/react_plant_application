import React from "react";
import axios, { AxiosResponse } from "axios";


const GetCrop = () => {


    const pdefaul = (e: any) => {
        e.preventDefault();
        
     
        interface MyData {
            id: number;
            name: string;
            email: string;
          }
          
          axios.get<MyData[]>('http://localhost:8080/api/v1/crop')
            .then((response: AxiosResponse<MyData[]>) => {
              // Do something with the data
              const data: MyData[] = response.data;
              console.log(data);
            })
            .catch(error => {
              // Handle the error
              console.error(error);
            });
    }

 
    return(
        <button onClick={pdefaul} >Register</button>
    )
}

export default GetCrop;
