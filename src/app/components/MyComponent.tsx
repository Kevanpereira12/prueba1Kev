import { link } from 'fs';
import React from 'react';


const MyComponent: React.FC = () => {
  const originalLink = 'https://www.linkedin.com/feed/';
  const originalLink2 = 'https://www.facebook.com/Kevanpereira99';
  const imageSource = 'https://cdn.icon-icons.com/icons2/2992/PNG/512/linkedin_logo_icon_187302.png';
  const imageSource2 = 'https://cdn.icon-icons.com/icons2/642/PNG/512/facebook_icon-icons.com_59205.png'

  return (
    <div className="container">
      <a href={originalLink}>
      <img src={imageSource} alt="logo linkedin" />
      </a>
      <a href={originalLink2}>
        <img src={imageSource2} alt="Texto alternativo de la imagen 2" />
      </a>
    </div>
  );
};

export default MyComponent;