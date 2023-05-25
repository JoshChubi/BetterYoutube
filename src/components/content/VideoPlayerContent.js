import React from 'react';
import './VideoPlayerContent.css';

import video_obj from './video_obj.mp4';

function VideoData(props) {
    return (
        <div className="videoData">
            <div className="videoData-Information">
                {props.title} <br />
                {props.author}
            </div>
            <div className="videoData-Description">
                <div className="videoData-Description-Header">Views: {props.views} Published: {props.data}</div>
                {props.desc}
            </div>
        </div>
        );
};

async function getVideoData() {

    const url = "https://ahqbw4sfkd.execute-api.us-west-1.amazonaws.com/HTTPGetVideoMetaData?Etag=29b1e39a561b75a75874fb2491f53dad";

    const response = await fetch(url);
    const data = await response.json();
    console.log("data inside getVideoData() - stringify(): " + JSON.stringify(data) + "\n");
    console.log("data.Item.VideoName inside getVideoData(): " + data.Item.VideoName + "\n");

    return data;
}

function VideoPlayerContent(props) {

    const data = getVideoData()
        .then(response => {
            response.json();
        })
        .then(data => {
            console.log("data inside VideoPlayerContent() .then: " + data.Item.VideoName);
        })

    console.log("data inside VideoPlayerContetn(): " + data + "\n")

    return (
        <div className="videoPlayerContent">
            <div className="videoPlayerContent-Scroll">
                <div className="videoPlayerContent-Grid">
                    <div className="video-container">
                        <video src={video_obj} controls></video>
                    </div>
                    <VideoData title={props.title} author={props.author} likes={props.likes} views={props.views} data={props.date} desc={props.desc} />
                </div>
            </div>
        </div> 
        );
};

export default VideoPlayerContent;