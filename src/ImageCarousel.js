import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

const ImageCarousel = () => {
  return (
    <Carousel
      showArrows={true}       
      showThumbs={false}      
      infiniteLoop={true}     
      autoPlay={true}         
      interval={3000}         
      showStatus={false}      
    >
      <div>
        <img src={img1} alt="First slide" />
      </div>
      <div>
        <img src={img2} alt="Second slide" />
      </div>
      <div>
        <img src={img3} alt="Third slide" />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
