import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import nikon from './images/nikon.png';
import sony from './images/sony.png';
import pana from './images/pana.png';
import ff from './images/ff.png';
import './BrandCollaboration.css';  

const BrandCollaboration = () => {
  return (
    <div className="brand-collaboration">
      <h2 className="text-center">A Decade of Work and Meaningful Partnerships</h2>
      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={33.33}
        stopOnHover={true}
        swipeable={true}
      >
        <div>
          <img src={nikon} alt="Nikon" className="carousel-image" />
        </div>
        <div>
          <img src={sony} alt="Sony" className="carousel-image" />
        </div>
        <div>
          <img src={pana} alt="Panasonic" className="carousel-image" />
        </div>
        <div>
          <img src={ff} alt="Fujifilm" className="carousel-image" />
        </div>
      </Carousel>
    </div>
  );
};

export default BrandCollaboration;
