import React, { useContext, useEffect, useState } from 'react'
import { courseContext } from '../context/CourseContext'
import Course from '../model/Course'

const ActionBar = () => {

    const { courses, addCourse } = useContext(courseContext)
    const [courseID, setCourseID] = useState(0)
    const [courseTitle, setCourseTitle] = useState("")
    const [prerequisiteID, setPrerequisiteID] = useState(0)

    const getOrdering = async () => {
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

    useEffect(() => {
        console.log(courses)
    }, [courses])

    const addCourseDetails = () => {
        let newCourse = new Course(courseID, courseTitle, prerequisiteID)
        addCourse(newCourse)
    }

    return (
        <div className='w-2/5 border border-black rounded-xl p-5'>
            <div className='grid grid-cols-1 gap-3 items-center flex px-5'>
                <div className='w-full flex justify-center text-center items-center mx-auto'>
                    <h4 className='w-2/5 p-2 flex justify-start'> Course Title </h4>
                    <input
                        className='w-3/5 border-solid border-2 border-black focus:outline-none rounded-xl p-2 text-center'
                        placeholder='Enter course title'
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                    ></input>
                </div>
                
                <div className='w-full flex text-center items-center mx-auto'>
                    <h4 className='w-3/5 p-2 flex justify-start'> Course Number </h4>
                    <input
                        className='w-2/5 border-solid border-2 border-black rounded-xl p-2 text-center'
                        placeholder='0'
                        value={courseID}
                        onChange={(e) => setCourseID(Number(e.target.value))}
                    ></input>
                </div>

                <div className='w-full flex text-center items-center mx-auto'>
                    <h4 className='w-3/5 p-2 flex justify-start'> Prerequisite Course Number </h4> 
                    <input
                        className='w-2/5 border-solid border-2 border-black rounded-xl p-2 text-center'
                        placeholder='0'
                        value={prerequisiteID}
                        onChange={(e) => setPrerequisiteID(Number(e.target.value))}
                    ></input>
                </div>

                <div className='w-full flex justify-center'>
                    <button 
                        className='border-solid border-2 border-blue-200 rounded-3xl p-2 mt-2 hover:shadow-md focus:shadow-[inset_-1px_-4px_1px_rgba(0,0,0,0.15)]'
                        onClick={addCourseDetails} 
                    > Add Course </button>
                </div>
                
            </div>

            <hr className='m-5'></hr>

            <div className='mt-5'>
                <h2 className='text-center'>Your courses</h2>
                <div className='h-60 overflow-y-scroll grid grid-cols-2 gap-4 p-5 border rounded-3xl'>
                    {courses.map((course, index) => (
                        <div key = {index} className='w-auto h-full border rounded-3xl text-center flex items-center justify-center p-2 shadow-md'>
                            <p>({course.id}) {course.title} | Prereq: {course.preRequisiteID}</p>
                        </div>
                    ))}
                </div>
            </div>

            <hr className='m-5'></hr>

            <div className='flex justify-center mt-5'>
                <button
                    className='border-solid border-2 border-blue-200 rounded-3xl p-2'
                > Get the order! </button>
            </div>
            
        </div>
    )
}

export default ActionBar
