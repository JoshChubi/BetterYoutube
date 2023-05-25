import React from 'react';
import './HomeContent.css';
import ThumbnailTest from '../../images/ThumbnailTest.jpg';
import HomeThumbnail from '../thumbnail/HomeThumbnail.js';
import App from '../../App.js';

function HomeContent(props) {

    async function PlayVideo(etag, metadata) {
        var dateObj = new Date(metadata.date * 1000);
        var utcString = dateObj.toUTCString();
        var dateValues = utcString.split(' ');
        utcString = dateValues[1] + " " + dateValues[2] + " " + dateValues[3];

        props.setContentData({ type: "VideoPlayer", etag: etag, title: metadata.title, author: metadata.author, likes: metadata.likes, views: metadata.views, date: utcString, desc: metadata.desc });
    }

    function CreateGridThumbnail(etag, metadata) {
        return (<div className="grid-item">
            <HomeThumbnail src={"https://dqdow3mh2lvus.cloudfront.net/thumbnails/" + etag + ".png"} alt={metadata.title} onClick={() => PlayVideo(etag, metadata)} />
        </div>)
    }

    return (
        <div className="homeContent">
            <div className="homeContent-Scroll">
                <div className="homeContent-Grid" >
                    {
                        Object.entries(props.refVideoMetadata.current).map(([etag, metadata]) => {
                            return CreateGridThumbnail(etag, metadata);
                        })   
                    }
                </div>
            </div>
        </div>
        );
};

export default HomeContent;