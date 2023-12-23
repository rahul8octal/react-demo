import React, { useEffect, useState } from 'react'
import Http from '../Http'
import useCountStore from '../StoreData/store';
// import axios from 'axios';
const BaseUrl = process.env.REACT_APP_API_HOST;

function Dashboard() {
  const[data,SetData] = useState([]);
  const count = useCountStore((state) => state.count)
  // let token = localStorage.getItem('token');
  // console.log(token);
    useEffect(()=> {
      // let id = 1;
  //     axios.get("https://ims-api-dev.octalinfotech.com/api/dashboard",{
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }).then((response)=>{
  // console.log(response.data);
  //     }).catch((error)=>{
  //       console.log(error);
  //     });
        Http.callApi('get',BaseUrl + 'dashboard').then(response => {
            SetData(response.data.data);
        }).catch(error => {
            console.log(error);
        });
    },[])
  return (
    <div>
      Dashboard<br/>
      {data.student}
      <br/>
      count: {count}
    </div>
  )
}

export default Dashboard
