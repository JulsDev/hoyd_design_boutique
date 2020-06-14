import React from 'react';


const Image = ({ src, alt, classes, ...attr }) => {

  if(!src) {
    src = 'https://via.placeholder.com'
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      {...attr} 
    />
  )
};

export default Image;