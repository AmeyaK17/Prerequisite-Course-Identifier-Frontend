import React from 'react'

interface DividerProps {
    direction: "vertical" | "horizontal";
  }

const Divider = (direction: DividerProps) => {
  return (
    direction.direction === "vertical"
        ? (<div className="w-[2px] bg-gray-700 mx-4"></div>)
        : (<div className="h-[2px] bg-gray-700"></div>)
  )
}

export default Divider
