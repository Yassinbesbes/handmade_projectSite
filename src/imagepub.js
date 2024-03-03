import React, { useState } from 'react';
import image1 from './images/image1.png'; // Import image1
import image2 from './images/image2.png'; // Import image2
import image3 from './images/image3.png'; // Import image3
import image4 from './images/image4.png'; // Import image4

import './imagepub.css'; // Corrected import statement

const ImagePub = () => {
  const [bigImage, setBigImage] = useState(image4); // Initialize bigImage with image4

  const handleImageClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className="image-pub-container">
      <div className="image-thumbnails">
        <div className="thumbnail-column">
          <img
            src={image1}
            alt="Thumbnail 1"
            className={`thumbnail ${bigImage === image1 ? 'selected' : ''}`}
            onClick={() => handleImageClick(image1)}
          />
          <img
            src={image2}
            alt="Thumbnail 2"
            className={`thumbnail ${bigImage === image2 ? 'selected' : ''}`}
            onClick={() => handleImageClick(image2)}
          />
          <img
            src={image3}
            alt="Thumbnail 3"
            className={`thumbnail ${bigImage === image3 ? 'selected' : ''}`}
            onClick={() => handleImageClick(image3)}
          />
        </div>
      </div>
      <div className="big-image-container">
        <img
          src={bigImage}
          alt="Big Image"
          className="big-image"
        />
      </div>
    </div>
  );
};

export default ImagePub;
