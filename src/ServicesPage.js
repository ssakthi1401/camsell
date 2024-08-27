import React from 'react';
import './styleser.css'; // Import the CSS file for styling

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1 className="text-center my-4">Our Services</h1>
      <div className="services-list">
        <div className="service-card">
          <div className="service-card-content">
            <i className="fas fa-tools service-icon"></i>
            <div>
              <h2 className="service-title">Camera Repair</h2>
              <p className="service-description">
                We offer professional camera repair services for all major brands. Our experienced technicians will ensure your camera is back in perfect working condition.
              </p>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <i className="fas fa-camera-retro service-icon"></i>
            <div>
              <h2 className="service-title">Camera Rental</h2>
              <p className="service-description">
                Rent high-quality cameras and lenses for your photography needs. Choose from our wide selection of gear and get expert advice on the best equipment for your project.
              </p>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-content">
            <i className="fas fa-comments service-icon"></i>
            <div>
              <h2 className="service-title">Consultation Services</h2>
              <p className="service-description">
                Get personalized advice from our experts to help you choose the right camera and accessories. Our consultations are tailored to meet your specific needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
