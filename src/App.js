import './App.css';
import './Colors.css';

import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';
import VideoPlayerContent from './components/content/VideoPlayerContent';

function App() {
    return (
       <div className="App">
            <div className="Header-Container">
                <Header />
            </div>

            <div className="Content-Container">
                <VideoPlayerContent />
            </div>

            {/*<div className="Filter-Container">
                <FilterScrollbar />
            </div>*/}

       </div>
  );
}

export default App;