import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table" style={{ color: 'white' }}>
        <div className="trow">
          <div className="cell">
            <div>Course</div>
          </div>
          <div className="cell cell2">
            <div>Roadmap </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>HTML</div>
          </div>
          <div className="cell cell2">
            <div>
              <a
                href="https://www.youtube.com/watch?v=pQN-pnXPaVg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                HTML Tutorial
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>CSS</div>
          </div>
          <div className="cell cell2">
            <div>
              <a
                href="https://www.youtube.com/watch?v=yfoY53QXEnI"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                CSS Tutorial
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>JavaScript</div>
          </div>
          <div className="cell cell2">
            <div>
              <a
                href="https://www.youtube.com/watch?v=hdI2bqOjy3c"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                JavaScript Tutorial
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>React</div>
          </div>
          <div className="cell cell2">
            <div>
              <a
                href="https://www.youtube.com/watch?v=DLX62G4lc44"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                React Tutorial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
