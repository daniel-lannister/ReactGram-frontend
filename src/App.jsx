import { useState } from 'react'
import './App.css'

// Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
