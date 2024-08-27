import React, { useState } from 'react';
import './addcam.css';
import nikonnew from './images/nikonnew.jpeg';
import nikon50mm from './images/nikon50mm.jpeg';

const initialCameras = [
  {
    id: 1,
    image: nikonnew,
    name: 'Nikon 5300',
    description: 'New Camera six month used camera good condition ',
    shutterCount: 500,
    price: '$20000'
  },
  {
    id: 2,
    image: nikon50mm,
    name: 'Nikon 50mm lens',
    description: 'Nikon 50mm lens, Good Condition',
    shutterCount: "Nill",
    price: '$3000'
  },
];

const CameraPage = () => {
  const [cameras, setCameras] = useState(initialCameras);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    description: '',
    shutterCount: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCamera = {
      id: cameras.length + 1,
      ...formData,
      image: formData.image || 'https://via.placeholder.com/350x200',
      shutterCount: parseInt(formData.shutterCount, 10),
      price: `$${formData.price}`
    };
    setCameras([...cameras, newCamera]);
    setFormData({
      image: '',
      name: '',
      description: '',
      shutterCount: '',
      price: ''
    });
    setShowForm(false);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Camera Listings</h1>
      <div className="row">
        {cameras.map(camera => (
          <div className="col-md-3 mb-4" key={camera.id}>
            <div className="card">
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
        <button className="btn btn-add-camera" onClick={() => setShowForm(!showForm)}>
          <i className="fas fa-camera"></i> Add New Camera
        </button>
      </div>

      {showForm && (
        <div className="form-container">
          <h2 className="text-center my-4">Add New Camera</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="image">Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="shutterCount">Shutter Count:</label>
              <input
                type="number"
                className="form-control"
                id="shutterCount"
                name="shutterCount"
                value={formData.shutterCount}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Camera</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CameraPage;
