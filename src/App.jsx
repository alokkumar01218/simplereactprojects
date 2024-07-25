import React from 'react'
import Accordian from './components/accordian/Accordian'
import Random from './components/random-color/Random';
import Star from './components/star';


export default function App() {
  return (
    <div className='App'>
      <Accordian />
      <Random />
      <Star />
    </div>
  )
}
