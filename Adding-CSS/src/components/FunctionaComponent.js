import React from 'react'
import './myStyles.css'
const FunctionaComponent = (props) => {
    console.log(props)
    
    let className = props.apply?'heading':'';
    let inline = {
        color:'red',
        fontSize:'200px'
    }
  return (
    <div>
      <h1 style = {inline}>Welocome to MRU,{props.city},{props.state}</h1>
      {props.children}
    </div>
  )
}

export default FunctionaComponent
