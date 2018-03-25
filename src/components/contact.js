import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    if (this.props.data) {
      var { name, email, phone } = this.props.data;
      var { street, neighborhood, city, state, country, zip } = this.props.data.address;
    }
    
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">
              For any professional proposal send me an e-mail. I would love to hear from you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text" size="35" id="contactName" name="contactName" />
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text" size="35" id="contactEmail" name="contactEmail" />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text" size="35" id="contactSubject" name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                  <img alt="" src="public/images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
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
          </aside>
        </div>
      </section>
    );
  }
}