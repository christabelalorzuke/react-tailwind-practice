

import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [state ,setState] = useState(0);

    const [data , setData]= useState("")
    const [ gender,setGender ]= useState("")
    


let Increse = () => setState( state + 1); 
let Decrease = () =>  setState( state - 1); 
let Reset = () =>  setState( 0 ); 
let handleChange = (e) => setGender (e.target.value)
let handleData = (e) => setData (e.target.value)




  return (
    <div>

        <h1>
            My first state is {state}
        </h1>
        <h1>
            You've entered {data}
        </h1>
        <h1>
            I am a {gender}
        </h1>

        <input type="text" onChange={handleData} />

        <select onChange={handleChange} >

        <option value=""> Select your gender </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>

        </select>

        <button onClick={ Increse }> Increase </button>
        <button onClick={ Decrease} >Decrease</button>
        <button onClick={ Reset } >Reset</button>

    </div>

  )
}

export default Counter;