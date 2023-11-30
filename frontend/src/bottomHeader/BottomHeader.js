import React, { useState } from 'react';
import { QApage } from './QApage';
import { CourseContent } from './CourseContent';
import { Overview } from './Overview';

export const BottomHeader = () => {
  const [show, setShow] = useState({ QA: false, CC: false, Read: false });

  const handleToggle = (component) => {
    setShow((prevShow) => {
      prevShow = { QA: false, CC: false, Read: false };
      prevShow[component] = true;
      return prevShow;
    });
  };

  return (
    <>
      <section>
        <div className='row'>
          <div className='col-md-2'>
            <button onClick={() => handleToggle('QA')}>Q & A</button>
          </div>
          <div className='col-md-2'>
            <button onClick={() => handleToggle('CC')}>Overview</button>
          </div>
          <div className='col-md-2'>
            <button onClick={() => handleToggle('Read')}>Read</button>
          </div>
        </div>
        <div>
          <div className={`${show.QA ? 'showblock' : 'hideblock'}`} id="qa-page">
            {show.QA && <QApage />}
          </div>
          <div className={`${show.CC ? 'showblock' : 'hideblock'}`} id="course-content-page">
            {show.CC && <CourseContent />}
          </div>
          <div className={`${show.Read ? 'showblock' : 'hideblock'}`} id="read-page">
            {show.Read && <Overview />}
          </div>
        </div>
      </section>
    </>
  );
};
