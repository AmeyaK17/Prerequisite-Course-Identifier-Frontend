import React, { useContext } from 'react'
import axios from 'axios'
import { courseContext } from '../../context/CourseContext'

const OrderedCourses = () => {
    const {courses} = useContext(courseContext)
    
    const getOrdering = async () => {
        const response = await fetch("http://localhost:8080/api/getOrdering", {
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
