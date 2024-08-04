import React from "react";

export default function Table3() {
  return (
    <div>
      <div className="table">
        <div className="trow">
          <div className="cell">
            <div>Roadmap</div>
          </div>
          <div className="cell cell2">
            <div>Course</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Intro to AI</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.coursera.org/learn/ai-for-everyone" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                AI For Everyone
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Generative Models</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.udacity.com/course/generative-adversarial-networks--ud651" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Generative Adversarial Networks
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Deep Learning</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.fast.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Practical Deep Learning
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>AI Art</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.artstation.com/learning/ai-art" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                AI Art Techniques
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
