import React, { useEffect } from 'react'
import Http from './../Http'
const BaseUrl = process.env.REACT_APP_API_HOST;

function Api() {
    const credentials = {
        email:"admin@gmail.com",
        password:"admin@123"

    };
    useEffect(()=> {
        Http.callApi('post',BaseUrl + 'login', credentials).then(response => {
            console.log(response);
            localStorage.setItem('token',response.data.data.token);
            Http.setBearerToken(response.data.data.token);
        }).catch(error => {
            console.log(error);
        });
    },[])
  return (
    <div>
      api
    </div>
  )
}

export default Api
