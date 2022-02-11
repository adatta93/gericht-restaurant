import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";
import { useRef, useState } from "react";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill
              color="#fff"
              className="app__video-overlay_circle-icon"
            />
          ) : (
            <BsFillPlayFill
              color="#fff"
              className="app__video-overlay_circle-icon"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;