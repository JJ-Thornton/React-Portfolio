import React from 'react';

const ContactMe = () => {
  return (
    <div id="contact-me">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <ul className="contact-list">
          <li className="contact-items">
            Phone: <a href="tel:530.492.4745">(530) 492-4745</a>
          </li>
          <li className="contact-items">
            E-mail:{' '}
            <a href="mailto:jjthorntonwebdev@gmail.com">
              JJThorntonWebDev@gmail.com
            </a>
          </li>
          <li className="contact-items"></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactMe;
