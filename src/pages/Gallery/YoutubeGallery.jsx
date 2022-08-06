import React from "react";
import "../../style/Gallery/YoutubeGallery.css";

function YoutubeGallery() {
  return (
    <div className="video-container">
      <hr />
      <div className="video-head">
        <h1>Videos</h1>
        <p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A rerum
            laborum laudantium quae perferendis maxime quo nisi omnis quis
            maiores. Labore incidunt iste nisi, inventore quae sunt adipisci
            velit qui?
          </span>
        </p>
      </div>
      <div className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X0jSP1Pwrtc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeGallery;
