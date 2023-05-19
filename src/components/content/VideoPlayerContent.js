import React from 'react';
import './VideoPlayerContent.css';

import video_obj from './video_obj.mp4';

function VidePlayerContent(props) {
    return (
        <div className="videoPlayerContent">
            <div className="videoPlayerContent-Scroll">
                <div className="video-container">
                    <video src={video_obj} controls></video>
                </div>
            </div>
        </div>
        );
};

export default VidePlayerContent;