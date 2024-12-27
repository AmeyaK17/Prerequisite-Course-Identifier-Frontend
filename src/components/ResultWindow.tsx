import React, { useContext } from 'react'
import { courseContext } from '../context/CourseContext'

const ResultWindow = () => {
    const { orderedList } = useContext(courseContext)

    return (
        <div className='w-3/5 text-white p-5'>
            <h2 className='text-xl font-bold flex justify-center p-5'>
                You should take the courses in this order:
            </h2>
            <div className='flex items-center justify-center grid grid-cols-3 gap-3'>
                {orderedList.map((course, index) => (
                    <div key={index} className='w-auto h-ful border rounded-xl text-center flex items-center justify-center p-2 m-2
                            bg-white text-black
                            shadow-[inset_2px_2px_10px_rgba(255,255,255,0.7),inset_-2px_-2px_10px_rgba(0,0,0,0.6)] '>
                        <p>({course.id}) {course.title} | Prereq: {course.preRequisiteID}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ResultWindow