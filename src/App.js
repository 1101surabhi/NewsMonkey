import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 15 ;

  constructor(){
    super() ;
    this.state = {
      searchQuery : ''
    }
  }

  handleSearch = (query) => {
    this.setState({searchQuery : query}) ;
    // console.log(this.state.searchQuery) ;
  }

  render() {
    return (
      <>
        <Router>
          <Navbar onSearch={this.handleSearch}/>
          <Routes>
            <Route exact
              path='/'
              element={<News key="general" pageSize={this.pageSize} country="in" category="general" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/business"
              element={<News key="business" pageSize={this.pageSize} country="in" category="business" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/entertainment"
              element={
                <News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" query={this.state.searchQuery} />
              }
            />
            <Route exact
              path="/general"
              element={<News key="general" pageSize={this.pageSize} country="in" category="general" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/health"
              element={<News key="health" pageSize={this.pageSize} country="in" category="health" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/science"
              element={<News key="science" pageSize={this.pageSize} country="in" category="science" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/sports"
              element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" query={this.state.searchQuery} />}
            />
            <Route exact
              path="/technology"
              element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" query={this.state.searchQuery} />}
            />
          </Routes>
        </Router>
      </>
    );
  }
}
