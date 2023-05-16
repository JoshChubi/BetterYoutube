import React from 'react';
import './HomeThumbnail.css';

function HomeThumbnail(props) {
    const { src, alt, onClick } = props;

    return (
        <div className="homeThumbnail-Container">
            <img
                className="homeThumbnail"
                src={src}
                alt={alt}
                onClick={onClick}
            />
            <div className="homeThumbnail-Overlay">
                <div className="homeThumbnail-Text">{alt}</div>
            </div>
        </div>
    );
}

export default HomeThumbnail;