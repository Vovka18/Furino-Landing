import React from "react";
import "../styles/share.sass";

import photo1 from '../img/share/photo1.jpg'
import photo2 from '../img/share/photo2.jpg'
import photo3 from '../img/share/photo3.jpg'
import photo4 from '../img/share/photo4.jpg'
import photo5 from '../img/share/photo5.jpg'
import photo6 from '../img/share/photo6.jpg'
import photo7 from '../img/share/photo7.jpg'
import photo8 from '../img/share/photo8.jpg'
import photo9 from '../img/share/photo9.jpg'


const mouseMove = (event) => {
  // console.log( event.clientX * (window.screen.availWidth / 100));
  console.log( event.clientX);
  
}

const Share = () => {
  return (
    <div className="Share">
      <div className="block-text">
        <p>Share your setup with</p>
        <h1>#FuniroFurniture</h1>
      </div>
      <div className="carusel" onMouseMove={mouseMove}>
        <img className="photo1" src={photo1} alt="" />
        <img className="photo2" src={photo2} alt="" />
        <img className="photo3" src={photo3} alt="" />
        <img className="photo4" src={photo4} alt="" />
        <img className="photo5" src={photo5} alt="" />
        <img className="photo6" src={photo6} alt="" />
        <img className="photo7" src={photo7} alt="" />
        <img className="photo8" src={photo8} alt="" />
        <img className="photo9" src={photo9} alt="" />
      </div>
    </div>
  );
};

export default Share;
