import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='w-full h-screen relative bg-zinc-300'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
