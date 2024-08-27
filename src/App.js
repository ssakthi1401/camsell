import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar'; // Ensure the import is correct
import AboutPage from './AboutPage';
import CameraPage from './CameraPage';
import BuyCameraPage from './BuyCameraPage';
import ServicesPage from './ServicesPage';
import LoginPage from './LoginPage';
import ImageCarousel from './ImageCarousel';
import BrandCollaboration from './BrandCollaboration';
import CameraCard from './CameraCard';
import SellCamera from './sellcamera'; // Correct component name
import FooterPage from './FooterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/.selling-camera" element={<CameraPage />} />
          <Route path="/buy-camera" element={<BuyCameraPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Add other routes as needed */}
        </Routes>
        <ImageCarousel />
        <BrandCollaboration />
        <CameraCard />
        <SellCamera /> 
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
