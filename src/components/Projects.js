import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="third container">
      <div className="project sos">
        <h2 className="sos-title">S.O.S.</h2>
        <p className="sos-project">
          Complex website made with HTML, CSS, Javascript. 19 pages, 19 designs,
          1 flow. Mobile, small to large laptop, small to large desktop views.
          One of my first projects. The sheer scale of the project made this
          challenging.
        </p>
        <embed src="https://thorntonbuildsos.netlify.app/" width="100%" />
      </div>
      <div className="project simple">
        <h2 className="simple-title">Simple Truth Church</h2>
        <p className="simple-project">
          A simple approach to a homegrown church. The theme of the wordless
          book is what you find as you go through the site. A friend that
          pastors there told me about the problems they were having with their
          previous site, while I was in the very beginning of my coding journey,
          as my first project ever, this posed as a way to help out people that
          had always helped me and a way to develop my skills in practice and
          with real application.
        </p>
        <embed src="https://simpletruth.netlify.app/" width="100%" />
      </div>
      <div className="project worth">
        <h2 className="worth-title">You`re Worth It</h2>
        <p className="worth-project">
          A pure passion project, no matter what happens in your life. The past,
          present, and future do not define you. This is a rebuild of a site
          that was taken down that was a resource for thousands of individuals
          and I wanted it to stay alive one way or another.
        </p>
        <embed src="https://youreworthit.netlify.app/" width="100%" />
      </div>
    </div>
  );
};

export default Projects;
