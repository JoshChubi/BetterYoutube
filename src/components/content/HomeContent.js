import React from 'react';
import './HomeContent.css';
import ThumbnailTest from '../../images/ThumbnailTest.jpg';
import HomeThumbnail from '../thumbnail/HomeThumbnail.js';
import App from '../../App.js';

function HomeContent(props) {
    function PlayVideo(etag) {
        props.setContentData({ type: "VideoPlayer", title: "Doing It Wrong - Capoxxo", author: "Capoxxo", likes: "200", views: "1.3mil", date: "1/1/2020", desc: "This is a video of two friends making great music together!" });
    }

    return (
        <div className="homeContent">
            <div className="homeContent-Scroll">
                <div className="homeContent-Grid">
                    <div className="grid-item">
                        <HomeThumbnail src={ThumbnailTest} alt="Video 1" onClick={PlayVideo} />
                    </div>
                </div>
            </div>
        </div>
        );
};

export default HomeContent;