import React from 'react'
import { UploadForm } from './UploadForm'
import { UploadList } from './UploadList'

export const Upload = () => {
  return (
    <div className="mainContainer">
      <div className="uploadOne">
        <UploadForm />
      </div>
      <div className="uploadTwo">
        <UploadList />
      </div>
    </div>
  )
}
