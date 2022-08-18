import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
 
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Header from './components/Header';

export default class App extends Component {
  state ={
    progress :0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    let pageSize=6;
    
    


    
    
    
    
    return (
      
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
        
        <Routes>
          <Route path='/'element={<Header/>}/>
        
          <Route path="/Business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country= "in" category="Business"/>}/>
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={this.pageSize} country= "in" category="Entertainment"/>}/>
          <Route path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={this.pageSize} country= "in" category="Science"/>}/>
          <Route path="/Sports" element={<News setProgress={this.setProgress} key="Sports" pageSize={this.pageSize} country= "in" category="Sports"/>}/>
          <Route path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={this.pageSize} country= "in" category="Technology"/>}/>

          
        </Routes>
        </Router>
      </div>
    )
  }
}