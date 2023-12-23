import React from 'react'
import Demo3 from './Demo3'

function demo() {

  function countList (data){
    console.log(data);
  }
  return (
    <>
    <div>demo</div>
    <Demo3 changeCount = {countList} />
    </>
  )
}

export default demo