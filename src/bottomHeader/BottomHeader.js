import React from 'react'
import { QApage } from './QApage'
import { Overview } from './Overview'
import { CourseContent } from './CourseContent'

export const BottomHeader = () => {
  return (
    <>
    <QApage/>
    <Overview/>
    <CourseContent/>
    </>
  )
}
