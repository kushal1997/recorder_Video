import React, { Fragment, useState } from "react";
import { BACKEND_URL } from "../config/constraints";
import "./css/uploadListCSS.css";
import image from "../assets/baner.png";
import { BottomHeader } from "../bottomHeader/BottomHeader";
export const UploadList = ({ medias }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <Fragment>
      <section>
        <div className="container-fluid">
          {/* style={{ backgroundColor: 'rgb(36 0 0 / 88%)', backgroundSize: 'cover', padding: '40px 0px 130px 70px' }} */}
          <div className="row">
            <div className="col-md-3">
              {/* <img src={image} alt='img'/> */}
              <div className="immersive-header-image">
                <img src={image} alt="baner" height={150} width={295} />
              </div>
              <div className="immersive-header-container">
                <div className="immersive-content">
                  <h2>Online Education Training For Node.js</h2>
                  <h5>Mr. Priyabrata Dash</h5>
                  <h6>10 videos &nbsp;&nbsp; Last Updated On Oct 10, 2023</h6>
                </div>

                <div className="circle">
                  <div className="meta-circle-button">
                    <i class="fa fa-facebook-f"></i>
                  </div>
                  <div className="meta-circle-button">
                    <i class="fa fa-linkedin"></i>
                  </div>
                  <div className="meta-circle-button">
                    <i class="fa fa-instagram"></i>
                  </div>
                </div>

                <div className="oval-btn">
                  <button type="button" className="btn btn-primary">
                    Contact Us
                  </button>
                  <button type="button" className="btn btn-primary0">
                    website
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 video">
              {/* <h2>Node js (DCS)</h2> */}
              <div className="embed-responsive embed-responsive-16by9">
                {selectedVideo ? (
                  <div className="video-player">
                    <video
                      preload="auto"
                      width={640}
                      height={360}
                      controls
                      src={selectedVideo}
                    ></video>
                  </div>
                ) : (
                  <div className="video-player">
                    <video
                      preload="auto"
                      width={640}
                      height={360}
                      controls
                    ></video>
                  </div>
                )}
              </div>
              <h4>
                Understand the JavaScript and technical concepts behind Node JS
              </h4>
            </div>

            <div className="col-md-2">
              <div className="content-list">
                <div
                  className="scroller"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                  style={{ visibility: "visible" }}
                >
                  {medias &&
                    medias.map((media) => (
                      <div
                        key={media._id}
                        className={`playlist-item ${
                          selectedVideo === `${BACKEND_URL}${media.videos[0]}`
                            ? "active"
                            : ""
                        }`}
                      >
                        <p
                          onClick={() =>
                            handleVideoClick(`${BACKEND_URL}${media.videos[0]}`)
                          }
                        >
                          <input type="checkbox" id="check_box" />{" "}
                          &nbsp;&nbsp;&nbsp;
                          {media.name}
                          <br />
                          <img
                            width="20"
                            height="20"
                            src="https://img.icons8.com/pastel-glyph/64/laptop-play-video--v1.png"
                            alt="laptop-play-video--v1"
                          />{" "}
                          <h6 style={{ textAlign: "left" }}>
                            {" "}
                            &nbsp; 16min32sec{" "}
                          </h6>
                        </p>
                      </div>
                    ))}
                  <p>
                    <input type="checkbox" id="check_box" /> &nbsp;&nbsp;&nbsp;
                    Section 1 : Node js introduction Node js introduction
                    <br />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/pastel-glyph/64/laptop-play-video--v1.png"
                      alt="laptop-play-video--v1"
                    />{" "}
                    <h6 style={{ textAlign: "left" }}> &nbsp; 16min32sec </h6>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-1">
              <h2 className="content-heading">COURSE CONTENT</h2>
            </div>
          </div>
        </div>
      </section>
      <BottomHeader />
    </Fragment>
  );
};
