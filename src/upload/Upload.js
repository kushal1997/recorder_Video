import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config/constraints'
import { UploadForm } from './UploadForm'
import { UploadList } from './UploadList'
import { Route, Routes } from 'react-router-dom';

export const Upload = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    getAllMedias();
  }, []);

  const getAllMedias = () => {
    axios
      .get(`${BACKEND_URL}/api/v1/media/all`)
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
<Route path='/' element={<UploadList medias={medias}/>}></Route>
<Route path='/uploadform'element={<UploadForm getAllMedias={getAllMedias}/>}> </Route>
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
