import React from 'react';
import './HomeContent.css';
import ThumbnailTest from '../../images/ThumbnailTest.jpg';
import HomeThumbnail from '../thumbnail/HomeThumbnail.js';
import App from '../../App.js';

function HomeContent(props) {

    async function getVideoData(etag) {

        const url = "https://ahqbw4sfkd.execute-api.us-west-1.amazonaws.com/HTTPGetVideoMetaData?Etag=" + etag;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    }

    async function PlayVideo(etag) {

        const videoData = (await getVideoData(etag)).Item;

        var dateObj = new Date(videoData.PublishDate * 1000);
        var utcString = dateObj.toUTCString();
        var dateValues = utcString.split(' ');
        utcString = dateValues[1] + " " + dateValues[2] + " " + dateValues[3];

        props.setContentData({ type: "VideoPlayer", etag: etag, title: videoData.VideoName, author: videoData.AuthorName, likes: videoData.Likes, views: videoData.Views, date: utcString, desc: videoData.Description });
    }

    return (
        <div className="homeContent">
            <div className="homeContent-Scroll">
                <div className="homeContent-Grid">
                    <div className="grid-item">
                        <HomeThumbnail src={ThumbnailTest} alt="Video 1" onClick={() => PlayVideo("29b1e39a561b75a75874fb2491f53dad") } />
                    </div>
                </div>
            </div>
        </div>
        );
};

export default HomeContent;