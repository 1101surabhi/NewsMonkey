import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 15 ;
  const apiKey = process.env.REACT_APP_apikey ;
  const [searchQuery, setSearchQuery] = useState('') ;
  const [progress, setProgress] = useState(0) ;

  const handleSearch = (query) => {
    setSearchQuery(query) ;
  }

    return (
      <>
        <Router>
        <LoadingBar
        height={3}
        color="red"
        progress={progress}
      />
          <Navbar onSearch={handleSearch}/>
          <Routes>
            <Route exact
              path='/'
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" query={searchQuery} />}
            />
            <Route exact
              path="/business"
              element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" query={searchQuery} />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" query={searchQuery} />
              }
            />
            <Route exact
              path="/general"
              element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" query={searchQuery} />}
            />
            <Route exact
              path="/health"
              element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" query={searchQuery} />}
            />
            <Route exact
              path="/science"
              element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" query={searchQuery} />}
            />
            <Route exact
              path="/sports"
              element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" query={searchQuery} />}
            />
            <Route exact
              path="/technology"
              element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" query={searchQuery} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
  
export default App ;