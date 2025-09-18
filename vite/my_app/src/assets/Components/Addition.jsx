import React, { useState } from 'react'

const Addition = () => {
  const[num1,setNum1]=useState(0);
  const[num2,setNum2]=useState(0);
  const[sum,setSum]=useState(0);

  const Addition=()=>{
    setSum(Number(num1)+Number(num2));
  }

    
  return (
    <div>
      <h1>Addition</h1>
      <input type='number' value ={num1} onChange={(e)=>setNum1(e.target.value)} placeholder='Enter the first number' />
      <br></br>
     <input type='number' value ={num2} onChange={(e)=>setNum2(e.target.value)} placeholder='Enter the second number' />
     <br></br>
     <button onClick={Addition}>Add</button>
     <br></br>
     <h3>Result:{sum}</h3>
    </div>
  )
}

export default Addition
