import React from 'react';
import imageSource from './public/profile.jpeg';


const MyComponent2 : React.FC = () => {
 
    const imageSource = 'https://scontent.fsjo5-1.fna.fbcdn.net/v/t39.30808-6/316821186_6252809494733908_7356712895019900107_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Liik6fnlwJkAX9j0u6I&_nc_ht=scontent.fsjo5-1.fna&oh=00_AfC3mCjWdOd5fepe6KpepLtHxZUsG58yrkCVRhGXgkJcDw&oe=64717E4E';

  return (
    <div>
    <a >
    <img src={imageSource} alt="imagen del dueño"
    style={{ width: '400px', height: 'auto' }}
    className="round-image"
    />
    
    </a>
    </div>
  );
};


export default MyComponent2;