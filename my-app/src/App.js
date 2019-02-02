import React, { Component } from 'react';
import './App.css';
import Main from './scenes/header';
import Tasks from './scenes/tasks';
import Theme from './scenes/theme';
import Projects from './scenes/projects';
import Footer from './scenes/footer';
import Presentation from './scenes/presentation';
import Logos from './scenes/logos';
import Statistics from './scenes/statistics';


const App = () => (
  <div>
    <Main/>
    <Tasks/>
    <Theme/>
    <Projects/>
    <Presentation/>
    <Statistics/>
    <Logos/>
    <Footer/>
  </div>   
)


export default App;

