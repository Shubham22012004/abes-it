import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './App.css'

import App from './App.jsx'
import Marks from './Marks.jsx'
import DisplayMarks from './DisplayMarks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  name={"kira"} email = {"hello@gmail.con"} rollno={665522} />
    <Marks name={"shubham"} roll={55656565} m1={52} m2={85} m3={42}/>
    <Mark
    s name={"kai"} roll={57586565} m1={52} m2={85} m3={42}/> */}
    <DisplayMarks />
  </StrictMode>,
)
