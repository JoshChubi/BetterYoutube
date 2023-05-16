import React from 'react';

function HomeThumbnail(props) {
    const { src, alt, onClick } = props;

    return (
        <img 
            className="home-thumbnail"
            src={src}
            alt={alt}
            onClick={onClick}
        />
        );
}

export default HomeThumbnail;