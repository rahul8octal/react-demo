import React, { useContext, useState } from 'react'
import { NameProvider } from '../App'
import useCountStore from '../StoreData/store';

function Demo4() {
    const { count, increase, decrease, reset } = useCountStore();

  return (
    <>
      <button onClick={() => decrease(1)}>-</button>
      <span>{count}</span>
      <button onClick={() => increase(1)}>+</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Demo4
