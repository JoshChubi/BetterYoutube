import React from 'react';
import './VideoPlayerContent.css';

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

function VideoPlayerContent(props) {

    return (
        <div className="videoPlayerContent">
            <div className="videoPlayerContent-Scroll">
                <div className="videoPlayerContent-Grid">
                    <div className="video-container">
                        <video src={"https://dqdow3mh2lvus.cloudfront.net/mp4/" + props.etag} controls></video>
                    </div>
                    <VideoData title={props.title} author={props.author} likes={props.likes} views={props.views} data={props.date} desc={props.desc} />
                </div>
            </div>
        </div> 
        );
};

export default VideoPlayerContent;