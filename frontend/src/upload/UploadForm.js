import React, { Fragment, useState } from "react";
import axios from 'axios'

export const UploadForm = ({ getAllMedias }) => {
  const apiUrl = process.env.REACT_APP_CREATE_VIDEO;

  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0); // Track upload progress
  const [showProgress, setShowProgress] = useState(false); // Flag to show/hide progress bar

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in videos) {
      formData.append('videos', videos[key]);
    }
    formData.append("name", name);

    axios.post(apiUrl, formData, {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted); // Update the progress state
        setShowProgress(true); // Show the progress bar
      }
    })
    .then(success => {
      getAllMedias();
      alert("Submitted Successfully");
      setUploadProgress(0); // Reset progress after successful upload
      setShowProgress(false); // Hide the progress bar
    })
    .catch(error => {
      alert("Error Happened" + error);
      setUploadProgress(0); // Reset progress on error
      setShowProgress(false); // Hide the progress bar
    });
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="videos">Upload Videos</label>
          <input
            type="file"
            name="videos"
            id="videos"
            multiple
            accept=".mp4,.mkv"
            onChange={(e) => setVideos(e.target.files)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showProgress && (
        <div>
          <progress value={uploadProgress} max="100">
            {uploadProgress}%
          </progress>
        </div>
      )}
    </Fragment>
  );
};
