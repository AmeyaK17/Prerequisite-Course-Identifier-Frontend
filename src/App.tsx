import React, { useContext, useEffect } from 'react'
import { courseContext } from './context/CourseContext'
import ActionBar from './components/ActionBar'
import TitleBar from './components/TitleBar'
import ResultWindow from './components/ResultWindow'
import Divider from './components/Divider'

const App = () => {
  return (
    <div className='h-full w-full bg-black'>
      <TitleBar />
      <Divider direction="horizontal"/>

      <div className='flex w-full'>
        <ActionBar />
        <Divider direction="vertical"/>
        <ResultWindow />
      </div>
      
    </div>
  )
}

export default App
