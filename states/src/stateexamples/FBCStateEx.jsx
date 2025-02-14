import React,{useState} from 'react'

const FBCStateEx = () => {
    const [value,setValue] = useState('MRU');
    let changeName = () =>{
        
        setValue("Mallareddy University")
    }
  return (
    <div>FBCStateEx
      <h1>{value}</h1>
      <button onClick={changeName}>Change State</button>
    </div>
  )
}

export default FBCStateEx
