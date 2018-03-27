import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';

export default class Contact extends Component {
  constructor() {
    super();
    
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: ""
    };
    
    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  handleChanges(event) {
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  } 
  
  handleBlur(event) {
    if (!event.target.value) {
      $('#message-error-'+ event.target.name).show();  
    }
    else {
      $('#message-error-'+ event.target.name).hide();
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    if (!this.state.contactName || !this.state.contactEmail || !this.state.contactMessage) {
      $('#message-success').hide();
      $('#message-warning').show();
    }
    else {
      this.setState({ 
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
      });
      
      axios.post('/formdata', {
        contactName: this.state.contactName,
        contactEmail: this.state.contactEmail,
        contactSubject: this.state.contactSubject,
        contactMessage: this.state.contactMessage
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      $('#message-success').show();
      $('#message-warning').hide();
    }
  }
  
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
            <form onSubmit={this.handleSubmit} action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input 
                    onBlur={this.handleBlur}
                    onChange={this.handleChanges} 
                    value={this.state.contactName} 
                    type="text" size="35" 
                    id="contactName" 
                    name="contactName" />
                  <div id="message-error-contactName"> A name must be informed.</div>
                </div>
                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input 
                    onBlur={this.handleBlur}
                    onChange={this.handleChanges} 
                    value={this.state.contactEmail} 
                    type="text" size="35" 
                    id="contactEmail" 
                    name="contactEmail" />
                  <div id="message-error-contactEmail"> An e-mail must be informed.</div>
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input 
                    onChange={this.handleChanges} 
                    value={this.state.contactSubject} 
                    type="text" size="35" 
                    id="contactSubject" 
                    name="contactSubject" />
                </div>
                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea 
                    onBlur={this.handleBlur}
                    onChange={this.handleChanges} 
                    value={this.state.contactMessage} 
                    cols="50" rows="15" 
                    id="contactMessage" 
                    name="contactMessage"></textarea>
                  <div id="message-error-contactMessage"> A message must be informed.</div>
                </div>
                <div>
                  <button className="submit">Submit</button>
                  <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>
            <div id="message-warning">Fill the empty fields above.</div>
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