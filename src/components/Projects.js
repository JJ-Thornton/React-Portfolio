import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="third container">
      <div className="project sos">
        <h2 className="sos-title">S.O.S.</h2>
        <embed src="https://thorntonbuildsos.netlify.app/" width="100%" />
      </div>
      <div className="project simple">
        <h2 className="simple-title">Simple Truth Church</h2>
        <embed src="https://simpletruth.netlify.app/" width="100%" />
      </div>
      <div className="project filler">
        <h2 className="filler">Random</h2>
        <embed src="https://youreworthit.netlify.app/" width="100%" />
      </div>
    </div>
  );
};

export default Projects;
