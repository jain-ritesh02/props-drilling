import React from 'react'

const Input = (props) => {
    console.log(props)
  return (
    <div>
      <input type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>
  )
}

export default Input