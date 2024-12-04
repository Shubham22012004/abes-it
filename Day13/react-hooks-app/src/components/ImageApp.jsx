import React, { useState } from 'react'
import "./ImageApp.css"
import pic from "../Images/bg.jpg"

const ImageApp = () => {
  const [width,setWidth] = useState(200)
  const [height,setHeight] = useState(200)
  const [rotation,setRotation] = useState(0)
  return (
    <div className='disp'>
      <div className='image'>
        <img 
          src={pic}
          style={{
            width: width,
            height: height,
            transform: `rotate(${rotation}deg)`,
          }}
          />
      </div>
      <div className='panel1'>
        <button onClick={() => {setWidth(width + 10)}}>Increase width</button>

        <button onClick={() => {setWidth(width - 10)}}>Decrease width</button>

        <button onClick={() => {setHeight(height + 10)}}>Increase height</button>

        <button onClick={() => {setHeight(height - 10)}}>Decrease height</button>

        <button onClick={() => {setRotation(rotation + 10)}}>Rotate Clockwise</button>

        <button onClick={() => {setRotation(rotation - 10)}}>Rotate antiClockwise</button>
      </div>
    </div>
  )
}

export default ImageApp