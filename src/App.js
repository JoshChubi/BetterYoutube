import './App.css';
import './Colors.css';

import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';

import video_obj from './videos/absolute_in_doubt.mp4' /*TO-DO: make dynamic - pull from s3 bucket*/

function App() {
    return (
       <div className="App">
            <div className="Header-Container">
                <Header />
            </div>

            <div className="Filter-Container">
                <FilterScrollbar />
            </div>

            <div className="Content-Container">
                <HomeContent />
                <div className="video-container">
                    <video src={video_obj} controls></video>
                </div>
            </div>
       </div>
  );
}

export default App;