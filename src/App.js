import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 15 ;
  apiKey = process.env.REACT_APP_apikey ;
  constructor(){
    super() ;
    this.state = {
      searchQuery : '',
      progress : 0
    }
  }

  setProgress = (progress) => {
    this.setState({progress : progress}) ;
    console.log("progress");
  }

  handleSearch = (query) => {
    this.setState({searchQuery : query}) ;
    // console.log(this.state.searchQuery) ;
  }

  render() {
    return (
      <>
        <Router>
        <LoadingBar
        height={3}
        color="red"
        progress={this.state.progress}
      />
          <Navbar onSearch={this.handleSearch}/>
          <Routes>
            <Route exact
              path='/'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/business"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" query={this.state.searchQuery} />
              }
            />
            <Route exact
              path="/general"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/health"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/science"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/sports"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/technology"
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology" query={this.state.searchQuery} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
