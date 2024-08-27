// CameraPage.js
import React from 'react';
import './CameraPage.css'; // Import your styles
import cameraImage from './images/sony_alpha.jpeg'; // Replace with your image path

const CameraPage = () => {
  return (
    <div className="camera-page-container">
      <div className="sidebar">
        <h2>Camera Categories</h2>
        <ul>
          <li>DSLR</li>
          <li>Mirrorless</li>
          <li>Action Cameras</li>
          <li>Accessories</li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Elevate Your Photography Journey with Our Cameras</h1>
        <p>Explore our extensive range of cameras, from cutting-edge DSLRs to versatile mirrorless models. Our selection is designed to meet the needs of both beginners and professionals alike.</p>

        <div className="dashboard-mockup">
          <img src={cameraImage} alt="Camera Dashboard" className="dashboard-image" />
        </div>

        <div className="product-info">
          <h2>Why Choose Our Cameras?</h2>
          <p>At our store, we prioritize quality and performance. Our cameras are equipped with the latest technology to ensure you capture every moment with precision and clarity.</p>
        </div>
      </div>
    </div>
  );
};

export default CameraPage;
