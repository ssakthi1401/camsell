import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage from './images/2.png';
import secondImage from './images/1.png';
import thirdImage from './images/3.png';
import img1 from './images/sony.png';
import img2 from './images/caonon.png';
import img3 from './images/nikon.png';
import img4 from './images/ff.png';
import img5 from './images/pana.png';
import nan from  './images/nann.png';


function App() {
  return (
    <div className="Desktop1">
      <div className="Rectangle1" />
      <div className="Rectangle3" />
      <div className="Frame1">
        <div className="Home">home</div>
        <div className="About">about</div>
        <div className="SellingCamera">selling camera</div>
        <div className="BuyCamera">buy camera</div>
        <div className="Services">services</div>
      </div>
      <div className="Rectangle5" />
      <div className="Login">LOGIN</div>

      <div className="banner">
        <div className="ImageCarousel">
          <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} showStatus={false} showArrows={false} transitionTime={100}>
            <div>
              <img src={bannerImage} alt="Banner" />
            </div>
            <div>
              <img src={secondImage} alt="Second" />
            </div>
            <div>
              <img src={thirdImage} alt="Third" />
            </div>
          </Carousel>
        </div>
      </div>
text-cen
      <div className="brand">
        <div className="container mt-5">
          <h2 className="text-cen">Our Popular Brands</h2>
          <Carousel autoPlayinterval={2000} infiniteLoop showThumbs={false} showStatus={false} showArrows={false} transitionTime={100} className="carousel-slider__item" >
            <div className="carousel-slider__item">
              <img src={img1} alt="Sony" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="carousel-slider__item">
              <img src={img2} alt="Canon" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="carousel-slider__item">
              <img src={img3} alt="Nikon" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="carousel-slider__item">
              <img src={img4} alt="Fujifilm" style={{ width: '200px', height: 'auto' }} />
            </div>
            <div className="carousel-slider__item">
              <img src={img5} alt="Panasonic" style={{ width: '200px', height: 'auto' }} />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="image-nann" style={{ textAlign: 'center' }}>
      <img src={nan} alt="nan" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>

    <div class="hello">
      <p>ercbfdetrthjmgfnsdfsbgewyjtmsgdnfsbdgejtrmgsndf</p>
      </div>
    </div>
  );
}

export default App;
