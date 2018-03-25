import React, { Component } from 'react';

import Social from './social';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <Social />
            </ul>
            <ul className="copyright">
              <li>&copy; Copyright 2014 CeeVee</li>
              <li>This resume template was designed by <a title="Styleshout" href="http://www.styleshout.com/" target="_blank" rel="noopener noreferrer">Styleshout</a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}