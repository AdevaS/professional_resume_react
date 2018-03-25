import React, { Component } from 'react';
import $ from 'jquery';

import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Portfolio from './portfolio';
import Resume from './resume';
import Testimonials from './testimonials';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      resumeData: {}
    }
  }
  
  getResumeData() {
    console.log(process.env.NODE_ENV);
    
    var jsonUrl = 'https://test-adevas.c9users.io/resumeData.json';
    
    if (process.env.NODE_ENV === 'production') {
      jsonUrl = 'https://aqueous-coast-82869.herokuapp.com/resumeData.json';
    }
    
    $.ajax({
      url: jsonUrl,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
  
  componentDidMount() {
    this.getResumeData();
  }
  
  render() {
    return (
      <div>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer />
      </div>
    );
  }
}