import React from 'react';
import Navbar from '../Components/Navbar';
import TextSubmit from '../Components/TextSubmit';
import "./Home.css";
const Home = () => {
    return (
        <div id="header">
            
          <Navbar/>
          <div className="introduction">
            <p>Full Stack Developer</p>
            <h1>Hi, I'm <span>Wilson</span> From Sydney!</h1>
          </div>
          <TextSubmit/>

        </div>
      );
}

export default Home
