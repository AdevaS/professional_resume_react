import React, { Component } from 'react';

export default class Social extends Component {
  render() {
    return (
      <div>
        {/*<li><a href="#"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>*/}
        <li><a id="linkedinLink" href="https://www.linkedin.com/in/adevanir-qa-analyst"><i className="fa fa-linkedin"></i></a></li>
        {/*<li><a href="#"><i className="fa fa-instagram"></i></a></li>
        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>*/}
        <li><a id="githubLink" href="https://github.com/AdevaS"><i className="fa fa-github"></i></a></li>
        <li><a id="skypeLink" href="skype:adevanir.junior?call"><i className="fa fa-skype"></i></a></li>
      </div>
    );
  }
}