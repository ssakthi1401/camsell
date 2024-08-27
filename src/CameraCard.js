// CameraCard.js
import React from 'react';
import './CameraCard.css'; // Importing the CSS for styling
import sony_alpha from './images/sony_alpha.jpeg'; // Replace with your image path
import eosrs from './images/eos - r5.jpg';
import eosr from './images/eosr.jpeg';
import nikon from './images/nikon5800.jpg';
import ff from './images/fftx.jpg';

const CameraCard = () => {
  return (
    <>
     <center> <h1>CAMERA AVAILABLE</h1></center>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={eosrs} style={{ width: '200px' }} alt="Camera" />
            <div className="camera-details">
              <h2>Canon EOS R5</h2> {/* Replace with your camera model */}
              <p><strong>Purchasing Year:</strong> 2021</p>
              <p><strong>Shutter Speed:</strong> 1/8000 sec</p>
              <p><strong>Accessories:</strong> Lens Kit, Tripod, Camera Bag</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={sony_alpha} style={{ width: '150px' }} alt="Camera" />
            <div className="camera-details">
              <h2>Canon EOS R5</h2> {/* Replace with your camera model */}
              <p><strong>Purchasing Year:</strong> 2022</p>
              <p><strong>Shutter Speed:</strong> 1/8000 sec</p>
              <p><strong>Accessories:</strong> Lens Kit, Tripod, Camera Bag</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={eosr} style={{ width: '150px' }} alt="Camera" />
            <div className="camera-details">
              <h2>Canon EOS R5</h2> {/* Replace with your camera model */}
              <p><strong>Purchasing Year:</strong> 2022</p>
              <p><strong>Shutter Speed:</strong> 1/8000 sec</p>
              <p><strong>Accessories:</strong> Lens Kit, Tripod, Camera Bag</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={nikon} style={{ width: '150px' }} alt="Camera" />
            <div className="camera-details">
              <h2>Canon EOS R5</h2> {/* Replace with your camera model */}
              <p><strong>Purchasing Year:</strong> 2022</p>
              <p><strong>Shutter Speed:</strong> 1/8000 sec</p>
              <p><strong>Accessories:</strong> Lens Kit, Tripod, Camera Bag</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={ff} style={{ width: '150px' }} alt="Camera" />
            <div className="camera-details">
              <h2>Canon EOS R5</h2> {/* Replace with your camera model */}
              <p><strong>Purchasing Year:</strong> 2022</p>
              <p><strong>Shutter Speed:</strong> 1/8000 sec</p>
              <p><strong>Accessories:</strong> Lens Kit, Tripod, Camera Bag</p>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CameraCard;
