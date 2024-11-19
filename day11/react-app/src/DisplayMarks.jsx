import React from 'react'
import Marks from './Marks'

const DisplayMarks = () => {
  const students = [{name:"Abhishek", roll: 89522, m1:98, m2:86, m3:85},
    {name:"kai", roll: 75126, m1:98, m2:86, m3:85},
    {name:"jai", roll: 14253, m1:98, m2:86, m3:85},
    {name:"veeru", roll: 75415, m1:98, m2:86, m3:85},
    {name:"tyson", roll: 52045, m1:98, m2:86, m3:85},
  ]
  return (
    <div>
      {students.map((student, index)=>(
        <Marks 
          key={index}
          name={student.name} 
          rollno = {student.roll} 
          m1={student.m1} 
          m2={student.m2}  
          m3={student.m3}
        > </Marks>
      ))}
    </div>
  )
}

export default DisplayMarks;