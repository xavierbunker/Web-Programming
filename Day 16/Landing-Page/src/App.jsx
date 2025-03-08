import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-between items-center'>
    <header className='text-center text-white p-10'>
      <h1 className='text-4x1 front-bold text-gray-800'>Welcome To My Landing Page</h1>
      <p className='mt-2 text-grey-600'>Discover more about what I do</p>
    </header>
    <main>
      <p>Party</p>
      <button>Get Started</button>
    </main>
    <footer>All Rights Reserved</footer>
  </div>
  </>
  )
}

export default App
