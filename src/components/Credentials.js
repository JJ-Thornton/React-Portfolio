import React from 'react';
import Image1 from '../project-images/image-css.jpg';
import Image2 from '../project-images/html.jpg';
import Image3 from '../project-images/javascript.jpg';
import Image4 from '../project-images/front-end.jpg';
import Image5 from '../project-images/python-1.jpg';

const Credentials = () => {
  return (
    <div className="cred-grid">
      <div className="cred-container">
        <img className="cred-size" src={Image1} alt="CSS Credential" />
      </div>
      <div className="cred-container">
        <img className="cred-size" src={Image2} alt="Html Credential" />
      </div>
      <div className="cred-container">
        <img className="cred-size" src={Image3} alt="Javascript Credential" />
      </div>
      <div className="cred-container">
        <img className="cred-size" src={Image4} alt="Front-End Credential" />
      </div>
      <div className="cred-container">
        <img className="cred-size" src={Image5} alt="Python Credential" />
      </div>
    </div>
  );
};

export default Credentials;
