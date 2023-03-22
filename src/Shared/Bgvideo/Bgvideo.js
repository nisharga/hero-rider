import React from "react";
import VideoPlayer from "react-background-video-player";
import Rider from "../../Assets/Rider.mp4";
import "./Bgvideo.css";
const Bgvideo = () => {
  return (
    <>
      <VideoPlayer
        className="bg_video"
        src={Rider}
        autoPlay={true}
        muted={true}
      />
      <div className="overlay"></div>
    </>
  );
};

export default Bgvideo;
