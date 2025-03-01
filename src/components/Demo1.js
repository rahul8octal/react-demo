import React, { useContext } from 'react'
import { NameProvider } from '../App';

const Demo1 = () => {
  const nameDetails = useContext(NameProvider);

  return (
    <>
     <h1>Demo </h1>
    <div>Demo1 </div>
    {nameDetails.user_name}
    </>
  )
}

export default Demo1