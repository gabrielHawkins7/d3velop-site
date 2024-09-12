import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/navbar'
import { LandingPage } from './components/landing'
import { Showcase } from './components/showcase'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <LandingPage/>
      <Showcase/>
    </>
  )
}

export default App
