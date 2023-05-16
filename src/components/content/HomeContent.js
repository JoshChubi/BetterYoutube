import React from 'react';
import './HomeContent.css';
import HomeThumbnail from '../thumbnail/HomeThumbnail.js';

function HomeContent(props) {
    return (
        <div className="homeContent">
            <div className="homeContent-Scroll">
                <div className="homeContent-Grid">
                    <div className="grid-item">
                        <HomeThumbnail src="../images/logo512.png" alt="Video 1" onClick={null} />
                    </div>
                </div>
            </div>
        </div>
        );
};

export default HomeContent;