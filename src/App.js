import './App.css';
import './Colors.css';

import Header from './components/header/Header.js';
import FilterScrollbar from './components/scrollbar/FilterScrollbar.js';
import HomeContent from './components/content/HomeContent.js';

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
            </div>
       </div>
  );
}

export default App;