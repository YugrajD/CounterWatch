import React from 'react';

const HeroLogo = ({ src, alt }) => {
  return (
    <img className="h-20 w-20 rounded-lg border-2 border-gray-700" src={src} alt={alt} />
    
  );
};

export default HeroLogo;