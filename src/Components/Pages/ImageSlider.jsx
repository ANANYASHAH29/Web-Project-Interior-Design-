import { useRef } from "react";
import "../../ImageSlider.css";

import img1 from "../../assets/images/rimg1.png";
import img2 from "../../assets/images/rimg2.png";
import img3 from "../../assets/images/rimg3.png";
import img4 from "../../assets/images/rimg4.png";
import img5 from "../../assets/images/rimg5.png";
const images = [img1, img2, img3, img4, img5];

export default function ImageSlider() {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300, // pixels to move left
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300, // pixels to move right
      behavior: "smooth",
    });
  };

  return (
    <div className="slider-wrapper">
      <button className="arrow left" onClick={scrollLeft}>
        &#10094;
      </button>

      <div className="slider-container" ref={sliderRef}>
        {images.map((img, index) => (
          <div className="card" key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
}
