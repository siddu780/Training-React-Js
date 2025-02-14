import React, { useContext } from 'react'
import { GlobalDataProvider } from './ContextAPI'

const ContextC3 = () => {
    const data = useContext(GlobalDataProvider);
    console.log(data);
  return (
    <div>ContextC3
        {/* <h1>{data}</h1> */}
        <h1>{data.count}</h1>
        <button onClick={data.incre}>increment</button>
    </div>
  )
}

export default ContextC3