import React from 'react';

const Skills = () => {
  return (
    <div id="skills">
      <div className="outline">
        <h2 className="second-title">Skills:</h2>
        <div className="second-container">
          <div className="grid">
            <h3 className="skills-titles">Languages:</h3>
            <ul className="list-containers">
              <div className="items">
                <li className="skills skill-1">CSS</li>
              </div>
              <div className="items">
                <li className="skills skill-1">HTML</li>
              </div>
              <div className="items">
                <li className="skills skill-2">JavaScript</li>
              </div>
              <div className="items">
                <li className="skills skill-2">Python</li>
              </div>
              <div className="items">
                <li className="skills skill-3">SQL</li>
              </div>
            </ul>
          </div>

          <div className="grid">
            <h3 className="skills-titles">
              Frameworks and Other Relevant Skills:
            </h3>
            <ul className="list-containers">
              <div className="items">
                <li className="skills skill-4">React</li>
              </div>
              <div className="items">
                <li className="skills skill-5">Bootstrap</li>
              </div>
              <div className="items">
                <li className="skills skill-5">SASS</li>
              </div>
              <div className="items">
                <li className="skills skill-9">Django</li>
              </div>
              <div className="items">
                <li className="skills skill-10">Machine Learning</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
