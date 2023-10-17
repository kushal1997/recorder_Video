import React from 'react';
import { QApage } from './QApage';
import { Overview } from './Overview';
import { CourseContent } from './CourseContent';
// import { LearningTool } from './LearningTool';

export const BottomHeader = () => {
  return (
    <>
    <section>
      <div className='row'>
        <div className='col-md-2'> <QApage/> </div>
        <div className='col-md-2'> <Overview/> </div>
        <div className='col-md-2'> <CourseContent/> </div>
        {/* <div className='col-md-2'> <LearningTool/> </div> */}
      </div>
    </section>
  
    
    
    </>
  )
}
