import React, { Component } from 'react'
import './App.css';
import { NewsAPI  } from './components/NewsApi';
import { NavBar } from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();

    this.state = {
      mode:"white",
      progress: 0
    };

  }
  
  Theme = ()=>{
    let Switch_theme = document.getElementById("flexSwitchCheckDefault")
    if (Switch_theme.checked) {
      document.body.style.backgroundColor = '#36454F'
      document.body.style.color = 'white'
      this.setState({mode: "dark"})
      
    }
    else {
      document.body.style.backgroundColor = 'whitesmoke'
      document.body.style.color = 'black'
      this.setState({mode:'white'})

    }
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    const {mode} = this.state
   

    return (
      <>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <NavBar title="NewsMonkey" mode={mode} onClick={this.Theme} />
          <div className='container'>
            <Routes>
              <Route   exact path='/' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"general"}  pageSize={6} country={"in"} category={"general"} />} />
              <Route  exact path='/business' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"business"} pageSize={6} country={"in"} category={"business"} />} />
              <Route  path='/entertainment' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"entertainment"} pageSize={6} country={"in"} category={"entertainment"} />} />
              <Route  path='/health' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"health"} pageSize={6} country={"in"} category={"health"} />} />
              <Route  path='/science' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"science"} pageSize={6} country={"in"} category={"science"} />} />pageSize={6} country={"in"}
              <Route  path='/sports' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"sports"} pageSize={6} country={"in"} category={"sports"} />} />
              <Route  path='/technology' element={<NewsAPI setProgress={this.setProgress} mode={mode} key={"technology"} pageSize={6} country={"in"} category={"technology"} />} />
            </Routes>
          </div>
        </Router>
      </>

    )
  }
}