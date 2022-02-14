import React, { useRef } from 'react';
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import img1 from "../images/slider1.png";
import img2 from "../images/slider2.png";
import img3 from "../images/slider3.png";
import img4 from "../images/slider4.png";

function MyImageSlider() {
    const slideImages = [img1, img2, img3, img4];
    let slideRef = useRef();

    const properties = {
        duration: 5000,
        autoplay: false,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: "ease",
        indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    return (
        <Slide ref={slideRef} {...properties}>
            {slideImages.map((each, index) => (
                <div key={index} className="each-slide">
                    <img className="lazy" src={each} alt="sample" height={400} width="100%" />
                </div>
            ))}
        </Slide>
    );
}

export default MyImageSlider;
