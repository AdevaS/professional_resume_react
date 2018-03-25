import React, { Component } from 'react';

export default class About extends Component {
  render() {
    if (this.props.data) {
      var { name, bio, email, phone, resumedownload } = this.props.data;
      var { street, neighborhood, city, state, country, zip } = this.props.data.address;
    }
    
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span><br/>
                  <span>{street}<br/>
                  {neighborhood}<br/>
                  {city}, {state}, {country}<br/>CEP {zip}
                  </span><br/>
                  <span>{phone}</span><br/>
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} target="_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}