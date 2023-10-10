import React, { Fragment, useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../config/constraints";
export const UploadForm = () => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData=new FormData();
    for(let key in videos){
      formData.append('videos',videos[key]);
    }
    formData.append("name",name);
    axios.post(`${BACKEND_URL}/api/v1/media/create`,formData)
    .then(success=>alert("Submitted Successflly"))
    .catch(error=>alert("Error Happened"+error));
    
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
        <button type="submit" >Submit</button>
      </form>
    </Fragment>
  );
};
