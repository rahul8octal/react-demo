import React from 'react'
// import Demo3 from './Demo3'
import Demo1 from './Demo1';
import Demo4 from './Demo4';

function demo() {

  function countList (data){
    console.log(data);
  }
  return (
    <>
    {/* <div>demo page</div>
    <Demo3 changeCount = {countList} /> */}
    <div>demo page</div>
    <Demo1 changeCount = {countList} />
    <Demo4/>
    </>

  )
}

export default demo