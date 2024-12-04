import React, { createContext, ReactNode, useState } from 'react'
import Course from '../model/Course'

interface courseProviderProps {
    children: ReactNode
}

interface CourseList {
    courses: Course[],
    addCourse: (course: Course) => void
}

const defaultCourseList: CourseList = {
    courses: [],
    addCourse: () => {},
}

export const courseContext = createContext(defaultCourseList)

const CourseContextProvider: React.FC<courseProviderProps> = (props) => {
    const [courses, setCourses] = useState<Course[]>([])

    const addCourse = (course: Course) => {
        setCourses(prevCourses => [...prevCourses, course])
    }

    const courseContextValue = {
        courses, setCourses,
        addCourse
    }

    return (
        <courseContext.Provider value={courseContextValue}>
            {props.children}
        </courseContext.Provider>
    )
}

export default CourseContextProvider
