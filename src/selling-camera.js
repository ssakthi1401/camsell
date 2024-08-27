import React, { useState } from 'react';
import './addcam.css';

const initialCameras = [
  {
    id: 1,
    image: 'https://via.placeholder.com/350x200',
    name: 'Camera Name 1',
    description: 'Description of Camera 1.',
    shutterCount: 5000,
    price: '$1000'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/350x200',
    name: 'Camera Name 2',
    description: 'Description of Camera 2.',
    shutterCount: 3000,
    price: '$800'
  },
];

const CameraPage = () => {
  const [cameras, setCameras] = useState(initialCameras);

  const addCamera = () => {
    // Example new camera data; you can replace this with a form input or other method
    const newCamera = {
      id: cameras.length + 1,
      image: 'https://via.placeholder.com/350x200',
      name: `New Camera ${cameras.length + 1}`,
      description: 'Description of the new camera.',
      shutterCount: 1000,
      price: `$${(cameras.length + 1) * 100}`
    };

    setCameras([...cameras, newCamera]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Camera Listings</h1>
      <div className="row">
        {cameras.map(camera => (
          <div className="col-md-4" key={camera.id}>
            <div className="card mb-4">
              <img src={camera.image} className="card-img-top" alt={camera.name} />
              <div className="card-body">
                <h5 className="card-title">{camera.name}</h5>
                <p className="card-text">{camera.description}</p>
                <p className="card-text"><strong>Shutter Count:</strong> {camera.shutterCount}</p>
                <p className="card-text"><strong>Price:</strong> {camera.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-add-camera" onClick={addCamera}>
          <i className="fas fa-camera"></i> Add New Camera
        </button>
      </div>
    </div>
  );
};

export default CameraPage;
