import './App.css';
import './Colors.css';

import { useState } from 'react';
import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';
import VideoPlayerContent from './components/content/VideoPlayerContent';

function App() {
    const [contentData, setContent] = useState({Type:"Home"});

    function ChooseContent() {
        if (contentData.Type === "Home")
            return <HomeContent />;
        else if (contentData.Type === "VideoPlayer")
            return <VideoPlayerContent title=" Doing It Wrong - Capoxxo" author="Capoxxo" likes="200" views="1.3mil" date="1/1/2020" desc="This is a video of two friends making great music together!" />;
    }

    return (
       <div className="App">
            <div className="Header-Container">
                <Header />
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