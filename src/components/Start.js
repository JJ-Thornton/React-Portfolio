import React from 'react';

const Start = () => {
  return (
    <div id="start" className="full-page">
      <div className="page-title">
        <h1 className="big-title">How Can I Help You?</h1>
        <ul className="list-group">
          <li className="list-item">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="list-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="list-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="list-item">
            <a href="#contact-me">Contact Me</a>
          </li>
          <li className="list-item">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/JJ-Thornton/React-Portfolio/blob/master/README.md"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Start;
