import React from 'react';
import './HomeThumbnail.css';

function HomeThumbnail(props) {
    return (
        <button className="homeThumbnail-Container" onClick={props.onClick}>
            <img
                className="homeThumbnail"
                src={props.src}
                alt={props.alt}
            />
            <div className="homeThumbnail-Overlay">
                <div className="homeThumbnail-Text">{props.alt}</div>
            </div>
        </button>
    );
}

export default HomeThumbnail;