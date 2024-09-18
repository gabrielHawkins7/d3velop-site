import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Home.tsx'
import './index.css'
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/poppins"; // Defaults to weight 400
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.tsx';
import About from './About.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
