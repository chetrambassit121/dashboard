import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Dashboard1 from './components/Dashboard1'
import Dashboard2 from './components/Dashboard2'
import Navbar from './components/Navbar'
import ShapeGrid from './ShapeGrid';


function App() {
  return (
    <div className="app">
      <div className="shapegrid-bg">
        <ShapeGrid 
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor="#2F293A"
          hoverFillColor='#222'
          shape='square' // square, hexagon, circle, triangle
          hoverTrailAmount={0} // number of trailing hovered shapes (0 = no trail)
          direction="diagonal"
          hoverColor="#222222"
          size={40}
          shape="square"
        />
      </div>

      <div className="app-content">
        <Navbar
          content={
            <Routes>
              <Route path="/" element={<Dashboard1 />} />
              <Route path="/dashboard2" element={<Dashboard2 />} />
            </Routes>
          }
        />
      </div>
    </div>
  )
}

export default App
