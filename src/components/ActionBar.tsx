import React, { useContext, useEffect, useState } from 'react'
import { courseContext } from '../context/CourseContext'
import Course from '../model/Course'
import Divider from './Divider'

const ActionBar = () => {

    const {courses, addCourse, getOrdering } = useContext(courseContext)
    const [courseID, setCourseID] = useState(0)
    const [courseTitle, setCourseTitle] = useState("")
    const [prerequisiteID, setPrerequisiteID] = useState(0)

    const getOrderingHandler = async () => {
        await getOrdering()

        setCourseID(0);
        setCourseTitle("");
        setPrerequisiteID(0);
    }

    useEffect(() => {
        console.log(courses)
    }, [courses])

    const addCourseDetails = () => {
        let newCourse = new Course(courseID, courseTitle, prerequisiteID)
        addCourse(newCourse)

        setCourseID(0);
        setCourseTitle("");
        setPrerequisiteID(0);
    }

    return (
        <div className='w-2/5 border border-black rounded-xl p-5 text-white'>
            <div className='grid grid-cols-1 gap-3 items-center flex px-5'>
                <div className='w-full flex justify-center text-center items-center mx-auto'>
                    <h4 className='w-2/5 p-2 flex justify-start'> Course Title </h4>
                    <input
                        className='w-3/5 text-center text-black rounded-xl p-2 mt-2  
                            hover:bg-gray-300
                            focus:outline-none
                            shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.8)]'
                        placeholder='Enter course title'
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                    ></input>
                </div>

                <div className='w-full flex text-center items-center mx-auto'>
                    <h4 className='w-3/5 p-2 flex justify-start'> Course Number </h4>
                    <input
                        className='w-2/5 text-center text-black rounded-xl p-2 mt-2  
                            hover:bg-gray-300
                            focus:outline-none
                            shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.8)]'
                        type='number'
                        placeholder='0'
                        value={courseID}
                        onChange={(e) => setCourseID(Number(e.target.value))}
                    ></input>
                </div>

                <div className='w-full flex text-center items-center mx-auto'>
                    <h4 className='w-3/5 p-2 flex justify-start'> Prerequisite Course Number </h4>
                    <input
                        className='w-2/5 text-center text-black rounded-xl p-2 mt-2  
                            hover:bg-gray-300
                            focus:outline-none
                            shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.8)]'
                        type='number'
                        placeholder='e.g 602'
                        value={prerequisiteID}
                        onChange={(e) => setPrerequisiteID(Number(e.target.value))}
                    ></input>
                </div>

                <div className='w-full flex justify-center'>
                    <button
                        className='border border-black rounded-xl bg-gray-200 text-black p-2 mt-2
                            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_6px_rgba(0,0,0,0.4)] 
                            hover:bg-gray-300
                            hover:shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_4px_rgba(0,0,0,0.3)] 
                            focus:bg-gray-400
                            focus:border-gray-400
                            focus:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.8)]'
                        onClick={addCourseDetails}
                    > Add Course </button>
                </div>

            </div>

            <Divider 
                direction='horizontal'  
                className='mt-5'
            />

            <div className='mt-5'>
                <div className='h-56 overflow-y-scroll grid grid-cols-2 gap-4 p-5 border border-gray-700 rounded-xl'>
                    {courses.map((course, index) => (
                        <div key={index} className='w-auto h-full border rounded-xl text-center flex items-center justify-center p-2
                            bg-white text-black
                            shadow-[inset_2px_2px_10px_rgba(255,255,255,0.7),inset_-2px_-2px_10px_rgba(0,0,0,0.6)] '>
                            <p>({course.id}) {course.title} | Prereq: {course.preRequisiteID}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center mt-5'>
                <button
                    className='border border-black rounded-xl bg-gray-200 text-black p-2 mt-2 
                            shadow-[inset_2px_2px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_6px_rgba(0,0,0,0.4)] 
                            hover:bg-gray-300
                            hover:shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),inset_-1px_-1px_4px_rgba(0,0,0,0.3)] 
                            focus:bg-gray-400
                            focus:border-gray-400
                            focus:shadow-[inset_-2px_-2px_6px_rgba(255,255,255,0.7),inset_2px_2px_6px_rgba(0,0,0,0.8)]'
                            onClick={getOrderingHandler}
                > Get the order! </button>
            </div>
        </div>
    )
}

export default ActionBar
