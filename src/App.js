import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header-DONE */}
      <Header />
        <div className="app_page">
          {/* Sidebar */}
          <Sidebar />
          {/* Recommended videos */}
          <RecommendedVideos />
        </div>
    </div>
  );
}

export default App;
