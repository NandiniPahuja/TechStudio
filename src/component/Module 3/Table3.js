import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table">
        <div className="trow">
          <div className="cell">
            <div>Topics</div>
          </div>
          <div className="cell cell2">
            <div>Resources</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>AI Basics</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=JMUxmLyrhSk" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Introduction to AI
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Machine Learning</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://youtu.be/ukzFI9rgwfU?si=Nv6dV1t8TEi7mk-x" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Basic Introduction
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Generative AI</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://youtu.be/cZaNf2rA30k?si=9itWgPSIGDuO-aRd" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Google's Intro
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>NLP</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=fLvJ8VdHLA0" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                NLP by IBM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
