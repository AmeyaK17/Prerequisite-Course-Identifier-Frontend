import React, { ReactNode } from 'react'

interface DividerProps {
    direction: "vertical" | "horizontal"
    className?: string
}

const Divider = (props: DividerProps) => {
  return (
    props.direction === "vertical"
        ? (<div className={`w-[2px] bg-gray-700 mx-4 + ${props.className}`}></div>)
        : (<div className={`h-[2px] bg-gray-700 my-4" + ${props.className}`}></div>)
  )
}

export default Divider
