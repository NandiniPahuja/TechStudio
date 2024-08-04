import React, { Component } from "react";
import gsap from "gsap";
import Container from "./container1";
import { Header } from "./styles/app.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { IconCont } from "../component/styles/education.styles";
import Particles from "react-particles-js";

export default class Second extends Component {
  componentDidMount() {
    const tl = gsap.timeline({ default: { ease: "power2.out" } });
    tl.fromTo(".secondLarge", { opacity: 0 }, { opacity: 1, duration: 2 });
    tl.fromTo(".lrgTXt2", { opacity: 0 }, { opacity: 1, duration: 1 });
  }

  render() {
    return (
      <div className="newdiv1">
        <Particles
          height="100vh"
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
                  enable: false, // disabled
                  mode: "bubble",
                },
                onclick: {
                  enable: false, // disabled
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
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0
          }}
        />
        <div className="top-right">
          <img src="./images/barbie.jpg" alt="" className="top-right-image" />
          <div className="top-right-buttons">
            <button className="btn">Help</button>
            <button className="btn">Contact</button>
            <button className="btn">Glow Up Guide</button>
          </div>
        </div>
        <div className="secondLarge">
          <Header>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <IconCont>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ fontSize: "40px", color: "#E90093" }} />
              </IconCont>
            </Link>
            {this.props.title}
          </Header>
          <div className="lrgTXt2">
            <div className="main-text">Let's start our Tech Girly era</div>
          </div>
        </div>
        <div className="portContainer">
          <Container />
        </div>
      </div>
    );
  }
}