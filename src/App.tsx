import React, { useContext, useEffect } from 'react'
import { courseContext } from './context/CourseContext'
import ActionBar from './components/ActionBar'
import TitleBar from './components/TitleBar'

const data = [
  {
    "id": 1,
    "title": "1",
    "preRequisiteID": 0
  },
  {
    "id": 2,
    "title": "2",
    "preRequisiteID": 0
  },
  {
    "id": 3,
    "title": "3",
    "preRequisiteID": 1
  },
  {
    "id": 3,
    "title": "3",
    "preRequisiteID": 2
  },
  {
    "id": 0,
    "title": "0",
    "preRequisiteID": 0
  }
]

const App = () => {
  const { courses, addCourse } = useContext(courseContext)

  // useEffect(() => {
  //   // Only add courses once to avoid multiple additions
  //   if (courses.length === 0) {
  //     data.forEach(d => {
  //       addCourse(d)
  //     })
  //   }

  //   console.log(courses)
  // }, [])
  

  const getOrdering = async () => {
    console.log(courses.length)
    
    data.forEach(course => {
      addCourse(course)
      console.log(course)
    })

    console.log(courses.length)
    
    const response = await fetch("http://localhost:8080/api/getOrdering", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(courses)
    })
    
    const result = await response.json()
    console.log(result)
  }

  return (
    <div className='h-screen'>
      <TitleBar />
      <ActionBar />
    </div>
  )
}

export default App
