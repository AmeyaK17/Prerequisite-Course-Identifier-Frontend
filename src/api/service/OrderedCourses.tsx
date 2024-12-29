import React, { useContext } from 'react'
import axios from 'axios'
import { courseContext } from '../../context/CourseContext'

const OrderedCourses = () => {
    const {courses} = useContext(courseContext)
    
    const getOrdering = async () => {
        const response = await fetch("https://prerequisite-course-identifier-backend.onrender.com/api/getOrdering", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(courses)
        })

        console.log(response)
    }

  return (
    <div>
      
    </div>
  )
}

export default OrderedCourses
