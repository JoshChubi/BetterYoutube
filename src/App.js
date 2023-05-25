import './App.css';
import './Colors.css';

import { useState, useRef } from 'react';
import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';
import VideoPlayerContent from './components/content/VideoPlayerContent';

function App() {
    const [contentData, setContentData] = useState({ type: null, etag: null, title: null, author: null, likes: null, views: null, date: null, desc: null });
    let refVideoMetadata = useRef(null);

    async function getVideosMetadata()
    {
        const url = "https://ahqbw4sfkd.execute-api.us-west-1.amazonaws.com/HTTGetUserRecommendedEtags?userId=123456";
        const response = await fetch(url);
        const metaDataObj = await response.json();

        var refMetadata = {}

        metaDataObj.map((metadata) => {
            refMetadata[metadata.Item.Etag] = {
                title: metadata.Item.VideoName,
                author: metadata.Item.AuthorName,
                likes: metadata.Item.Likes,
                views: metadata.Item.Views,
                date: metadata.Item.PublishDate,
                desc: metadata.Item.Description,
            }
        });

        refVideoMetadata.current = refMetadata;
        setContentData({type: "Home"});
    }

    function ChooseContent() {
        if (contentData.type === "Home")
            return <HomeContent setContentData={setContentData} refVideoMetadata={refVideoMetadata} />;
        else if (contentData.type === "VideoPlayer")
            return <VideoPlayerContent etag={contentData.etag} title={contentData.title} author={contentData.author} likes={contentData.likes} views={contentData.views} date={contentData.date} desc={contentData.desc} />;
        else if (contentData.type === null)
            getVideosMetadata();
    }
    return (
       <div className="App">
            <div className="Header-Container">
                <Header setContentData={setContentData}/>
            </div>

            <div className="Content-Container">
                {ChooseContent()}
            </div>

            {/*<div className="Filter-Container">
                <FilterScrollbar />
            </div>*/}
       </div>
  );
}

export default App;