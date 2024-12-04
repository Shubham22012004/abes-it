import React from 'react'
// import CounterApp from "./components/CounterApp";
import ImageApp from './components/ImageApp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import CounterApp from "./components/CounterApp";


const App = () => {
  return (
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} >
              <Route path="/counterapp" element={<CounterApp />} />
              <Route path="/imageapp" element={<ImageApp />} />


            </Route>
          </Routes>
        </BrowserRouter>
      
  )
}

export default App
