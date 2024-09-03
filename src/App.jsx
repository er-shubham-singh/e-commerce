import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SinglePage from './SinglePage'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
     <SinglePage />
    </>
  )
}

export default App
