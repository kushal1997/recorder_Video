import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { UploadForm } from './UploadForm'
import { UploadList } from './UploadList'
import { Route, Routes } from 'react-router-dom';



export const Upload = () => {

  const [medias, setMedias] = useState([]);
  const getVideos =process.env.REACT_APP_GET_VIDEOS
  console.log(getVideos);
  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(getVideos)
      .then((result) => {
        setMedias(result.data);
      })
      .catch((error) => {
        setMedias([]);
        console.log(error);
        alert("Error happened!");
      });
  };
  return (
    <div className="mainContainer">
      <Routes>
        <Route path='/' element={<UploadList medias={medias} />}></Route>
        <Route path='/uploadform' element={<UploadForm getAllMedias={getAllMedias} />}> </Route>
      </Routes>
      {/* <div className="uploadOne">
        <UploadForm getAllMedias={getAllMedias}/>
      </div>
      <div className="uploadTwo">
        <UploadList medias={medias}/>
      </div> */}

    </div>
  )
}
