import React from "react";

export default function Table() {
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
            <div>Cloud Basics</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://cloud.google.com/learn" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Introduction to Cloud
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>AWS Fundamentals</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://aws.amazon.com/training/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                AWS Services Overview
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Azure Overview</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.microsoft.com/en-us/learning/azure-training.aspx" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Azure Cloud
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>IBM Insights</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.ibm.com/cloud/learn" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                IBM Cloud Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
