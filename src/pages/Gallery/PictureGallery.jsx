import React, { useState } from "react";
import "../../style/Gallery/PictureGallery.css";
import { Pictures } from "../../assets/pictureData";
import close from "../../images/close.png";


function PictureGallery() {
  const [model, setModel] = useState(false);
  const [temimgSRC, setTemimgSRC] = useState("");
  const getImg = (imgSrc) => {
    setTemimgSRC(imgSrc);
    setModel(true);
  };
  return (
    <>
          <div className="picture-container">
            <div className="picture-head">
              <h1>Our Story</h1>
              <p>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  nemo itaque consequatur rerum.
                </span>
              </p>
            </div>
          </div>
          <div className={model ? "model open" : "model"}>
            <img
              src={close}
              className="model-close"
              alt=""
              onClick={() => setModel(false)}
            />
            <img
              src={temimgSRC}
              className="model-img"
              alt=""
              style={{ width: "50%" }}
            />
          </div>
          <div className="pic-head">
              <h1>Memories</h1>
            </div>
          <div className="picture-gallery">
            
            {Pictures.map((picList, key) => (
              <div
                className="picture-images"
                key={key}
                onClick={() => getImg(picList.pic)}
              >
                <img src={picList.pic} alt="" />
              </div>
            ))}
          
          </div>
    </>
  );
}

export default PictureGallery;
