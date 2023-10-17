import React from 'react';

const LearningTool = () => {
  return (
    <>
      <h2>Learning reminders Bell</h2>
      <h4>Calender Events</h4>
      <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
      <button type="button" classNameNameName="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Ceate an Event</h4>
            </div>
            <div className="modal-body">
                <p>Time to Learn!</p>
                <b>Course </b><h6>Optional</h6>
                <p>Choose from your most recent or search from your courses
                Node js
                Informatica</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>
    </>
  )
}

export default LearningTool;

