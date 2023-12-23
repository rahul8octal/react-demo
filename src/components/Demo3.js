import React, { useContext, useState } from 'react'
import { NameProvider } from '../App'
import useCountStore from '../StoreData/store';

function Demo3(props) {
    const[count,SetCount] = useState(0);
    const nameDetails = useContext(NameProvider)
    const setCount = useCountStore((state) => state.increase)
    setCount(count)

    function handelCount()
    {
        SetCount(count + 1);
        props.changeCount(count);
    }
  return (
    <>
    <div>
      demo3
    </div>
    <div>
      count :
      {count}
    </div>
      {nameDetails.shop_name}
      <div>
      <button onClick={handelCount}>btn</button>
      </div>
    </>
  )
}

export default Demo3
