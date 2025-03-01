import React from 'react'
import Demo3 from './Demo3'
import Demo1 from './Demo1';

function demo() {

  function countList (data){
    console.log(data);
  }
  return (
    <>
    <div>demo</div>
    <Demo3 changeCount = {countList} />
    <div>demo3</div>
    <Demo1 changeCount = {countList} />
    </>
  )
}

export default demo