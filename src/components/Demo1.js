import React, { useContext } from 'react'
import { NameProvider } from '../App';
import useCountStore from '../StoreData/store';

const Demo1 = () => {
  const nameDetails = useContext(NameProvider);
  const { count, getUserData} = useCountStore();

  
  const currentUser = getUserData();
  console.error(currentUser,'2323');
  

  return (
    <>
    <div>second page </div>

    <p>Student count {currentUser.student}</p>
   

    {nameDetails.user_name}

    <h2>count : {count}</h2>
    </>
  )
}

export default Demo1