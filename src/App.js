import './App.css';
import './Colors.css';

import { useState } from 'react';
import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';
import VideoPlayerContent from './components/content/VideoPlayerContent';

function App() {
    const [contentData, setContentData] = useState({ type: "Home", etag: null, title: null, author: null, likes: null, views: null, date: null, desc: null });

    function ChooseContent() {
        if (contentData.type === "Home")
            return <HomeContent setContentData={setContentData} />;
        else if (contentData.type === "VideoPlayer")
            return <VideoPlayerContent etag={contentData.etag} title={contentData.title} author={contentData.author} likes={contentData.likes} views={contentData.views} date={contentData.date} desc={contentData.desc} />;
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