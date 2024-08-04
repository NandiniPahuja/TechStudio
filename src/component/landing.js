import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
export default class landing extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#ff1493', height: '100vh', width: '100vw' }}>
        <Particles
          height="120vh"
          params={{
            particles: {
              number: {
                value: 860,
                density: {
                  enable: true,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />

          <div id="text1">
          
          <h1 className="title">
            <div className="col flexMe">
              <div>Tech Studio </div>
            </div>
          </h1>
        </div>
        <Link to="/knowMore">
          {" "}
          <div className="btnDiv">
            <div> Girl code </div>
          </div>
        </Link>

        <div className="img-3"></div>
        <div class="overlay first"></div>
        <div class="overlay second"></div>
        <div class="overlay third"></div>
      </div>
    );
  }
}
