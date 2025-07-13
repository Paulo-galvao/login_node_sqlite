import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import UserArea from './components/UserArea.jsx';
import Signin from './Signin.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/userarea' element={<UserArea />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
