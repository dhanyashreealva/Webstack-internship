import React from 'react'

const Addition = ({num1,num2}) => {

   
    const sum=num1+num2;
  return (
    <div>
      <h1>Addition</h1>
      <p>{num1}+{num2}={sum}</p>
    </div>
  )
}

export default Addition
