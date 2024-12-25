import React, { createContext, ReactNode, useState } from 'react'
import Course from '../model/Course'

interface courseProviderProps {
    children: ReactNode
}

interface CourseList {
    courses: Course[],
    addCourse: (course: Course) => void,
    getOrdering: () => void,
    orderedList: Course[]
}

const defaultCourseList: CourseList = {
    courses: [],
    addCourse: () => {},
    getOrdering: () => {},
    orderedList: []
}

export const courseContext = createContext(defaultCourseList)

const CourseContextProvider: React.FC<courseProviderProps> = (props) => {
    const [courses, setCourses] = useState<Course[]>([])
    const [orderedList, setOrderedList] = useState([])

    const addCourse = (course: Course) => {
        setCourses(prevCourses => [...prevCourses, course])
    }

    const getOrdering = async () => {
        console.log("Get Ordering")
        console.log(courses.length)

        const response = await fetch("http://localhost:8080/api/getOrdering", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(courses)
        })

        const result = await response.json()
        setOrderedList(result)
    }

    const courseContextValue = {
        courses, setCourses,
        addCourse,
        getOrdering,
        orderedList
    }

    return (
        <courseContext.Provider value={courseContextValue}>
            {props.children}
        </courseContext.Provider>
    )
}

export default CourseContextProvider
