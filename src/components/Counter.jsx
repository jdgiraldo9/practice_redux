import React from 'react'
import {increment,decrement} from '../redux/slice.js'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

  const count = useSelector((state)=>state.counter);
  const dispatch= useDispatch();

  return (
    <div>
     <h1> Counter: {count}</h1>
     <div>
      <button className='btn btn-primary' onClick={()=> dispatch(increment())}>Incremenet</button>
     </div>
     <div>
      <button className='btn btn-danger' onClick={()=> dispatch(decrement())}>Decrement</button>
     </div>
    </div>
  )
}

export default Counter
